// Mecânicas pequenas e determinísticas, compartilhadas pelos testes e pelo jogo.
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const smoothstep = (x, a, b) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const T_MathUtils_smoothstep = (x, a, b) => smoothstep(x, a, b);

/** IK de duas pernas: o pé percorre o solo e volta pela frente, não chuta atrás. */
export function runningLegPose(phase, stride = 1, running = 1) {
  const p = ((phase % 1) + 1) % 1;
  stride = clamp(stride, 0, 1.05);
  running=clamp(running,0,1);
  // Pressão no chão cai com a velocidade (corrida tem mais fase aérea). O valor
  // é o denominador da cadência: apoio curto = passada longa = menos passos por
  // segundo. A 0.5.42 usava .62-.30r e a 6,5 m/s dava 7,7 passos/s (passinho
  // de boneco, o "patinar" de pernas girando).
  const support=.66-.28*running;
  const stance = p < support;
  const t = stance ? p / support : (p - support) / (1-support);
  // Corrida tem apoio < metade do ciclo: duas fases aéreas por passada.
  // Recuperação alta do joelho, com alcance traseiro curto (21 cm).
  // No voo o pé fica atrás primeiro (calcanhar sobe) e só no fim chicoteia para
  // a frente. Com a curva simétrica ele ia cedo demais para a frente e a perna
  // se dobrava no ar — o joelho alto de "marcha".
  const smooth = Math.pow(t * t * (3 - 2 * t), 1.7);
  // Passada de corrida mais longa (a caminhada quase não muda): o pé percorre
  // no apoio o que o corpo anda naquele intervalo, então a perna precisa de
  // alcance suficiente para cadência e velocidade combinarem sem deslizar.
  // Passada mais longa no sprint: é o alcance do pé que permite cadência
  // humana. A caminhada continua curta.
  const front=.25+.38*running,back=.12+.22*running;
  const z = (stance ? front-(front+back)*t : -back+(front+back)*smooth)*stride;
  // Recuperação em duas fases: primeiro o calcanhar sobe atrás (chute no
  // glúteo), depois a perna vem à frente. Só o sino simples deixava o joelho
  // parado no alto e a corrida virava marcha no lugar.
  // Envelope que zera nas duas pontas do voo: sem isso a elevação salta no
  // instante do apoio e a perna "estala" (o teste de salto entre amostras pega).
  const env = stance ? 0 : T_MathUtils_smoothstep(t, 0, .16) * (1 - T_MathUtils_smoothstep(t, .82, 1));
  const heelKick = env * Math.exp(-Math.pow((t - .22) / .24, 2)) * (.075 + .115 * running);
  const swingLift = env * Math.sin(Math.PI * Math.min(1, t * 1.25)) ** 2 * (.030 + .105 * running);
  const lift = heelKick + swingLift;
  // O pé de apoio quase estende a perna; retirar o encurtamento constante
  // de 6 cm elimina o agachamento durante toda a passada.
  const compression=stance?.018*running*Math.sin(Math.PI*t)**2:0;
  const y = -Math.sqrt(.855*.855-z*z)+lift+compression,
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
  const r=clamp(running,0,1),blend=r*r*(3-2*r);
  const swing=Math.cos(phase*Math.PI*2);
  // Caminhada: braços soltos e quietos. Corrida: balanço contralateral.
  // Corrida de verdade: braço abre à frente e vai atrás, cotovelo em ~90°.
  // Corrida real: cotovelo fica dobrado (~85°) e quem balança é o ombro. Antes
  // o braço ia quase esticado à frente, com cara de autômato.
  // Braço solto: quem balança é o ombro (~35° para cada lado, como um corredor);
  // cotovelo em ~30°. Acima de ~0,8 rad o braço fica esticado para a frente e
  // parece autômato.
  return { shoulder:.60*blend*swing,
    elbow:-(.08+.40*blend)*(1-.15*Math.max(0,-swing)),
    twist:.028*blend*Math.sin(phase*Math.PI*2) };
}
export function runningFlight(phase,running=1){
  const support=.66-.28*clamp(running,0,1),p=((phase%1)+1)%1,other=(p+.5)%1;
  return p>=support&&other>=support;
}

/** Passada máxima que o rig desenha (mesmo limite de `runningLegPose`). */
const REACH=1.05;

/** Distância de um ciclo compatível com a velocidade local do pé no apoio.
 * Número/altura modulam apenas discretamente o estilo, nunca identidade/rosto.
 *
 * O pé de apoio NÃO pode deslizar: durante o apoio o corpo anda
 * `distance * support` e o pé recua exatamente isso. A versão 0.5.41 usava um
 * ciclo fixo (5,6 m na corrida) com uma passada de ~0,6 m, então o atleta
 * "patinava" para frente — mais visível ao correr de lado, porque o corpo já
 * gira para o lado da corrida. Agora a distância do ciclo é derivada do
 * contato desenhado, limitada pelo alcance das pernas (passo compacto em vez
 * de pernas abertas demais).
 */
export function runningCycle(running=1,height=1,number=10){
  const r=clamp(running,0,1),style=1+((Math.abs(Number(number)||10)%7)-3)*.012;
  const stride=Math.min(REACH, (.65+.35*r)*style*Math.max(.5,height));
  const support=runningSupport(r);
  const contact=contactTravel(r,stride);
  // A cadência antiga (5,6 m por ciclo na corrida) fazia o corpo andar quase
  // três vezes o que o pé percorria no apoio: daí o "patinar", bem visível ao
  // correr de lado. A cadência nova fica 80% presa ao contato desenhado e 20%
  // na antiga — o pé quase não escorrega e a passada continua humana (não vira
  // corridinha de passinhos curtos).
  const contactDistance=contact/support;
  // Só na corrida a cadência fica presa ao contato do pé; andar e trote mantêm
  // o ciclo antigo (que já era natural) — senão a caminhada fica com passos
  // longos demais, de "patinação".
  const legacyDistance=(1.15+2.05*r)*style*Math.max(.5,height);
  const blend=r*r*(3-2*r);
  const target=legacyDistance+(contactDistance-legacyDistance)*blend;
  const distance=target*.85+legacyDistance*.15;
  return {stride,distance,style,support,contact,contactDistance};
}

/** Fração do ciclo com o pé no chão (a corrida tem fase aérea maior). */
export function runningSupport(running=1){
  return .66-.28*clamp(running,0,1);
}

/** Quanto o pé de apoio recua, em metros, durante o apoio. */
export function contactTravel(running=1,stride=1){
  const r=clamp(running,0,1),s=clamp(stride,0,1.05*Math.max(1,stride));
  const front=.25+.38*r,back=.12+.22*r;
  return (front+back)*s;
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

/** Preparação, contato e acompanhamento, usados apenas na pose (não mudam física). */
export function kickPose(progress,kind='shot'){
  const p=clamp(progress,0,1),smooth=x=>x*x*(3-2*x);
  const pass=['pass','through','placed'].includes(kind),power=kind==='power';
  const amplitude=pass?.65:power?1.24:1;
  const swing=p<.32?.48*Math.sin(Math.PI*p/.32)**2:-.85*Math.sin(Math.PI*(p-.32)/.68);
  return {hip:swing*amplitude,knee:p<.32?.9*smooth(p/.32):.12+.78*(1-smooth(clamp((p-.32)/.2,0,1))),
    opening:pass?.22:0,torso:(power?.16:.09)*Math.sin(p*Math.PI),contact:.32};
}
