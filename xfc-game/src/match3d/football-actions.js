// Mecânicas pequenas e determinísticas, compartilhadas pelos testes e pelo jogo.
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

/** IK de duas pernas: o pé percorre o solo e volta pela frente, não chuta atrás. */
export function runningLegPose(phase, stride = 1, running = 1) {
  const p = ((phase % 1) + 1) % 1;
  stride = clamp(stride, 0, 1.05);
  running=clamp(running,0,1);
  const support=.62-.30*running;
  const stance = p < support;
  const t = stance ? p / support : (p - support) / (1-support);
  // Corrida tem apoio < metade do ciclo: duas fases aéreas por passada.
  // Recuperação alta do joelho, com alcance traseiro curto (21 cm).
  const smooth = t * t * (3 - 2 * t);
  const front=.25+.13*running,back=.12+.09*running;
  const z = (stance ? front-(front+back)*t : -back+(front+back)*smooth)*stride;
  const lift = stance ? 0 : Math.sin(Math.PI*t)**2*(.055+.225*running);
  // O pé de apoio quase estende a perna; retirar o encurtamento constante
  // de 6 cm elimina o agachamento durante toda a passada.
  const y = -Math.sqrt(.855*.855-z*z)+lift,
    a = 0.44,
    b = 0.42;
  const distance = clamp(Math.hypot(y, z), 0.2, a + b - 0.002);
  const knee =
    Math.PI -
    Math.acos(
      clamp((a * a + b * b - distance * distance) / (2 * a * b), -1, 1)
    );
  const hip =
    -Math.atan2(z, -y) -
    Math.acos(
      clamp((a * a + distance * distance - b * b) / (2 * a * distance), -1, 1)
    );
  // Rolagem pequena de calcanhar/ponta no apoio, tornozelo neutro no voo.
  const roll=stance?(.10*(1-t)-.22*Math.max(0,(t-.7)/.3)):0;
  return { hip, knee, ankle: -hip - knee+roll, z, lift, y, stance };
}

/** Contrabalanço sagital: braço oposto à perna; cotovelo abre atrás do corpo. */
export function runningArmPose(phase, running=1) {
  const swing=Math.cos(phase*Math.PI*2);
  return { shoulder:(.32+.48*clamp(running,0,1))*swing,
    elbow:-(.68-.30*swing), twist:.055*Math.sin(phase*Math.PI*2) };
}
export function runningFlight(phase,running=1){
  const support=.62-.30*clamp(running,0,1),p=((phase%1)+1)%1,other=(p+.5)%1;
  return p>=support&&other>=support;
}

/** Distância de um ciclo compatível com a velocidade local do pé no apoio.
 * Número/altura modulam apenas discretamente o estilo, nunca identidade/rosto. */
export function runningCycle(running=1,height=1,number=10){
  const r=clamp(running,0,1),style=1+((Math.abs(Number(number)||10)%7)-3)*.012;
  const stride=(.65+.35*r)*style;
  return {stride,distance:((.25+.13*r)+(.12+.09*r))*stride/(.62-.30*r)*Math.max(.5,height),style};
}

/** O joystick horizontal é relativo à câmera atrás do batedor. */
export function penaltyTarget(stickX, stickY = 0, sign = 1) {
  return {
    x: sign * 52.5,
    z: clamp(Number(stickX) || 0, -1, 1) * sign * 3.12,
    height: 0.35 + clamp(Number(stickY) || 0, 0, 1) * 1.5
  };
}
export function choosePenaltyLane(random = Math.random) {
  return [-1, 0, 1][Math.min(2, Math.floor(clamp(random(), 0, 1) * 3))];
}

/** Chapéu sobre o executor: habilidade reduz a distância de recuperação. */
export function rainbowProfile(dribbling = 70) {
  const skill = clamp((Number(dribbling) || 70) / 100, .2, .99);
  return { duration: 1.18, distance: 5.6 - skill * 3.8,
    height: 2.65, recoveryRadius: .65 + skill * .8 };
}
export function rainbowPoint(progress, profile) {
  const t = clamp(progress, 0, 1);
  return { forward: -.55 + (profile.distance + .55) * t * t,
    height: .11 + 4 * profile.height * t * (1 - t) };
}
