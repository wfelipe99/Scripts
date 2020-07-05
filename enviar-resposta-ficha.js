$(window).on('load', function () {
  var idTopicoFicha = localStorage.getItem('idTopicoFicha');
  
  var ninjutsu = parseInt(localStorage.getItem('ninjutsu'));
  var taijutsu = parseInt(localStorage.getItem('taijutsu'));
  var genjutsu = parseInt(localStorage.getItem('genjutsu'));
  var shurikenjutsu = parseInt(localStorage.getItem('shurikenjutsu'));
  var controleChakra = parseFloat(localStorage.getItem('controle-chakra'));
  var selos = parseFloat(localStorage.getItem('selos'));
  var constituicaoMental = parseFloat(localStorage.getItem('constituicao-mental'));
  var resistencia = parseFloat(localStorage.getItem('resistencia'));
  var forca = parseFloat(localStorage.getItem('forca'));
  var velocidade = parseFloat(localStorage.getItem('velocidade'));
  var cla = localStorage.getItem('cla')
  
  var jutsusHabilidadeGeral = []
  var jutsusNinjutsu = []
  var jutsusFukuwajutsu = []
  var equipamentos = []
  var marionetes = []
  var modos = []
  
  if (cla === 'Hoshigaki') {
    equipamentos.push(`
[img]https://i.servimg.com/u/f62/19/85/42/92/hayate10.png[/img]
[u][b]Katana[/b][/u]
[b]Porte:[/b] Médio
[b]Quantidade:[/b] 1 unidade
[b]Descrição:[/b] A katana é geralmente definida uma espada de tamanho padrão, moderadamente curva (em oposição ao antigo "tachi" estilo com mais curvatura) e com um comprimento de lâmina maior que 60 cm (231⁄2 polegadas). Caracteriza-se por sua aparência distintiva: uma lâmina curva, delgada e de um único fio com uma proteção circular ou quadrada (tsuba) e base longa para acomodar duas mãos. Ela é ideal para efetuar cortes rápidos e muita usada combates de curta distância.`)
  }
  
  if (cla === 'Hōzuki') {
    equipamentos.push(`
[img]https://i62.servimg.com/u/f62/19/46/73/96/suiget10.png[/img]
[u][b]Copo Squeeze[/b][/u]
[b]Porte:[/b] Pequeno
[b]Quantidade:[/b] 1 unidade (500 mls)
[b]Descrição:[/b] Um copo squeeze simples com tampa e canudos removíveis. Embora venha nas cores azul bondi e preto, ela pode ser personalizada à vontade do usuário.`)
  }
  
  if (cla === 'Kurosuki') {
    equipamentos.push(`
[img]https://i62.servimg.com/u/f62/19/46/73/96/de866610.jpg[/img]
[u][b]Garra Retrátil Kurosuki[/b][/u]
[b]Porte:[/b] Médio
[b]Quantidade:[/b] 1 par
[b]Descrição:[/b] Um par de luvas de couro com um compartimento em suas superfícies. Este compartimento abriga três lâminas retráteis e curvas que podem ser acionadas com uma impulsão de chakra do usuário. Elas podem proporcionar taijutsus, como o Kuro Tatsumaki.`)
  }
  
  if (cla === 'Shirogane') {
    equipamentos.push(`
[img]https://i.servimg.com/u/f93/19/85/42/92/com_ga10.png[/img]
[b][u]Marionete Andarilha com Garras[/u][/b]
[b]Porte:[/b] Médio
[b]Quantidade:[/b] 1 unidade
[b]Descrição:[/b] A forma mais comum de marionete andarilha usada pelo Clã Shirogane. Além dos seus 1,6 metros de altura, elas também têm uma cabeça que se assemelha a da Formiga Negra, braços longos e finos com três dedos feitos de lâminas em cada mão, uma caixa no peito com uma fórmula de determinada técnica, e em seu centro escrito o kanji para "corte" (斩) na mesma, uma espinha fina conectar seu peito aos seus quadris e pernas, vestidos de preto, calças rasgadas. Eles atacam principalmente com as suas garras, a fiação no local ou mergulhar em seus alvos. Esta marionete também pode efetuar o Henge no Jutsu a fim de enganar alguém se passando por uma pessoa conhecida, embora seja preciso que o usuário tenha o conhecimento desta bem como de sua voz para replicá-la no mecanismo sonoro reprodutor de voz da marionete.
[b]Armamentos:[/b] Nenhum.`)
  }
  
  if (cla === 'Fūma') {
    equipamentos.push(`
[img]https://i.servimg.com/u/f93/19/85/42/92/iruka10.png[/img]
[u][b]Shuriken Gigante[/b][/u]
[b]Porte:[/b] Grande
[b]Quantidade:[/b] 1 unidade
[b]Descrição:[/b] É apenas uma shuriken de quatro pontas com o diâmetro de um bambolê. Segurando no orifício central, o ninja rotaciona o shuriken gigante, criando o mesmo efeito do Fūma Shuriken.`)
  }
  
  if (cla === 'Jūgo') {
    modos.push(`
[img]https://i.servimg.com/u/f93/19/85/42/92/jugo11.png[/img]
[b][u]Senninka • Estágio 1[/u][/b]
[color=#990099][b]Rank:[/b] S[/color]
[b]Tipo:[/b] Suporte, Passivo
[b]Classe:[/b] Hijutsu, Modo
[b]Requisito:[/b] Nenhum
[b]Descrição:[/b] Transformação Sábia (仙人化, Senninka) é uma transformação que consiste em uma mutação por absorver energia natural em grande quantidade e de forma passiva, que resulta em um aumento da capacidade física e a possibilidade de realizar várias proezas que mudam de forma. Essa é uma habilidade comum dentro do clã de Jūgo e para aqueles que obtêm suas células transplantadas em seu corpo. Esta transformação é uma habilidade multifacetada que lhe permite realizar feitos que vão desde a criação de vários apêndices como armas até mesmo consumir outros seres humanos (Saibō Kyūin), bem como um aumento geral em suas capacidades físicas. As transformações do corpo resultadas por esta capacidade possuem um padrão similar ao cobre na área onde a transformação ocorre, a pele sobre a área afetada torna-se castanha, e se ocorre a transformação nos olhos, a esclerótica fica escura também. Um usuário pode transplantar a sua carne (Saibō Haishutsu) com alguém compatível com tais experiências, e acontecimentos de uma lesão severa, mas isso fará com que o corpo do usuário diminua de tamanho e idade. Embora membros desse clã possam absorver energia natural passivamente sem ser transformado em uma estátua, como acontece com aqueles que não conseguiram aprender o senjutsu, seus corpos não podem controlar os grandes picos de energia que acompanham a transformação e, como tal, são propensos a esporadicamente perder as estribeiras.
[b]Energia Natural Coletada:[/b] 0/1600 pontos`)
  }
  
  if (cla === 'Kedōin') {
    equipamentos.push(`
[img]https://i62.servimg.com/u/f62/19/85/42/92/habili10.png[/img]
[b][u]Máscara Kedōin[/u][/b]
[b]Porte:[/b] Pequeno
[b]Quantidade:[/b] 1 unidade
[b]Descrição:[/b] Uma máscara simples, cujo propósito serve de preparativo da técnica Kao Utsushi no Jutsu do clã Kedōin. Assim que o jutsu é iniciado, a máscara molda-se conforme o rosto do alvo.`)
  }
  
  if (cla === 'Rinha') {
    equipamentos.push(`
[img]https://i.servimg.com/u/f93/19/85/42/92/tzocni21.png[/img]
[u][b]Esfera de Cristal[/b][/u]
[b]Porte:[/b] Médio
[b]Quantidade:[/b] 2 unidades
[b]Descrição:[/b] Esta orbe de vidro pode ser usada por ninjas experientes para observar outras pessoas como uma câmera através do Tōmegane no Jutsu, ou outras funções, como selamentos e afins. Ela é leve, porém frágil, devendo-se ter cuidado ao manuseá-la muito bruscamente.`)
  }
  
  if (cla === 'Tenrō') {
    if (ninjutsu >= 2 && controleChakra >= 0.2) {
      jutsusNinjutsu.push(`
[img]https://i.servimg.com/u/f97/19/55/10/92/sensor10.png[/img]
[u][b]Kanchi no Jutsu[/b][/u]
[color=#0033ff][b]Rank:[/b] D[/color]
[b]Tipo:[/b] Suporte, Passivo
[b]Classe:[/b] Ninjutsu
[b]Requisito:[/b] Controle de Chakra (0.2 pontos)
[b]Descrição:[/b] A Técnica Sensorial, usada pelos shinobi tipo sensor, permite ao usuário reconhecer chakra em seu estado bruto. Usando esta técnica, os sensores podem facilmente detectar e rastrear alvos, sabendo distinguir assinaturas, tipos, quantidades, localizações e variações de fluxos de chakra. Embora esta habilidade conceda aos seus usuários uma capacidade sensorial elevada, ela não é capaz de reconhecer sistemas de circulação de chakra e tenketsus, ou mesmo pontos isolados no corpo do objeto emissor onde há maior concentração de chakra. O alcance desta técnica varia entre os sensores.
[b]Variação:[/b] A Técnica Sensorial usada pelos membros do Clã Tenrō permite ao usuário rastrear chakra comum através do cheiro e somente por ele, com distâncias variadas relacionadas ao seu controle de chakra próprio e com interferência do vento.`)
    }
    
    equipamentos.push(`
[img]https://i62.servimg.com/u/f62/19/85/42/92/110.jpg[/img]
[u][b]Tsume Ashi[/b][/u]
[b]Porte:[/b] Pequeno
[b]Quantidade:[/b] 1 par
[b]Descrição: [/b]Os membros do Clã Tenrō possuem um artefato muito peculiar e bem fácil de usar pelos membros, onde essas garras de pé funcionam muito bem em combates corpo-a-corpo.`)
  }
  
  if (cla === 'Yomi') {
    equipamentos.push(`
[img]https://i.servimg.com/u/f62/19/46/73/96/bistur10.png[/img]
[u][b]Bisturi[/b][/u]
[b]Porte:[/b] Pequeno
[b]Quantidade:[/b] 1 unidade
[b]Descrição: [/b]Um bisturi é um pequeno instrumento de lâmina extremamente afiada destinada a cortar através da pele, tendões e músculos. Ele é usado principalmente por iryō-nin, médicos, ou praticamente qualquer pessoa com conhecimentos médicos para realizar cirurgias. No entanto, devido à sua agudeza, ele também pode ser usado como uma arma potente contra o inimigo. Kabuto Yakushi tinha conhecimento para fazer isso em uma tentativa de matar Sasuke.`)
  }
  
  jutsusFukuwajutsu.push(`
[img]https://i.servimg.com/u/f93/19/85/42/92/mudanz10.png[/img]
[u][b]Onsei Henkan no Jutsu[/b][/u]
[color=#ff66ff][b]Rank:[/b] E[/color]
[b]Tipo:[/b] Suporte
[b]Classe:[/b] Fukuwajutsu
[b]Requisito:[/b] Nenhum
[b]Descrição:[/b] Essa técnica permite que seu usuário seja capaz de ajustar e alterar a sua voz, permitindo-lhe usar diferentes vozes e até mesmo imitar a de uma outra pessoa. Isso é geralmente utilizado em conjunto com técnicas de transformação, tornando disfarces ainda mais convincentes. O uso dessa técnica por longos períodos de tempo é penoso para garganta do usuário. Na maior parte das vezes em que essa técnica foi usada, foram utilizadas técnicas de transformação pouco convencionais, que exigiram tal alteração na voz. Quando o Henge no Jutsu é usado, a voz do usuário se altera instintivamente, mas não se sabe se ela está relacionado de alguma forma com essa técnica. Apesar de Kakashi mencionar que o uso prolongado da técnica é penoso à garganta, Obito e Sasori usaram a voz frequentemente sem qualquer dano à garganta. É desconhecido se isso se deve ao corpo de Sasori ser uma marionete e o corpo de Obito estar repleto de células curativas de Hashirama.
`)
  
  jutsusHabilidadeGeral.push(`
[img]https://i.servimg.com/u/f93/19/85/42/92/16010.png[/img]
[b][u]Ninpō • Kigurumi no Jutsu[/u][/b]
[color=#ff66ff][b]Rank:[/b] E[/color]
[b]Tipo:[/b] Suporte
[b]Classe:[/b] Habilidade Geral
[b]Requisito:[/b] Nenhum
[b]Descrição:[/b] Esta é uma habilidade geral em que um ninja disfarça-se com um traje de fantasia para enganar o oponente. Ela pode ser usada em conjunto com a Técnica de Transformação, para um efeito mais realista ou mesmo em conjunto com alguma técnica de confusão visual, como convocar gaivotas e outros pássaros. O usuário ainda pode adaptar sua voz para confundir o usuário com essa técnica. Esta habilidade simples, embora pareça inútil devido à Técnica de Transformação, mostrou-se útil, visto que o ninja não faz uso de chakra para se disfarçar.
[b]Nota:[/b] Requer uma fantasia ou vestimenta de disfarce.

[img]https://i.servimg.com/u/f93/19/85/42/92/negazz10.png[/img]
[u][b]Bikō Ninjutsu[/b][/u]
[color=#ff66ff][b]Rank:[/b] E[/color]
[b]Tipo:[/b] Suporte
[b]Classe:[/b] Habilidade Geral
[b]Requisito:[/b] Nenhum
[b]Descrição:[/b] Esta é uma habilidade geral que permite que um ninja esconda-se dentro de uma caixa onde torna-o invisível aos olhos de quem vê. Esta habilidade simples, embora pareça inútil, mostrou-se ter certa relevância, visto que aqueles que observam a caixa, a examina como um simples objeto inanimado, tornando irrelevante e dando possibilidade de fuga ao ninja que encontra-se dentro da mesma. Apesar da técnica ter uma mecânica muito simples, Konohamaru, Moegi e Udon usaram-na de forma equivocada, uma vez que correram atrás de Naruto antes de fazer sua entrevista com os participantes da segunda fase dos Exames Chūnin.
`)
  
  if (controleChakra >= 1.5) {
    // Suimen Hoko
    jutsusHabilidadeGeral.push(`
[img]https://i.ibb.co/4RKyWHN/168.png[/img]
[u][b]Suimen Hokō no Gyō[/b][/u]
[color=#0066ff][b]Rank:[/b] D[/color]
[b]Tipo:[/b] Suporte
[b]Classe:[/b] Habilidade Geral
[b]Requisito:[/b] Controle de Chakra (1.5 pontos)
[b]Descrição:[/b] Este método de treinamento é usado para obter um melhor controle de chakra. Para fazer isso, o utilizador tem de emitir um fluxo constante de chakra a partir do fundo dos seus pés e usando a força repelente para caminhar sobre a superfície da água. Esta técnica é muito mais difícil de dominar que a Prática de Escalada em Árvore (Kinobori Shūgyō), porque a quantidade de chakra que é necessária muda constantemente. Também foi mostrado que é possível usar seu chakra como "skate" em toda a superfície da água, como um patinador de gelo, em vez de apenas caminhar ou correr. Como foi observado por Jiraiya, quanto mais se treina esta técnica mais eles chegam a um estado onde estão sobre a água sem perceber ou, basicamente, ainda tentando. Apesar de ser comumente usado nos pés, o usuário pode também enviar o fluxo de chakra para as mãos e se apoiar sobre elas ou qualquer outra parte de seu corpo.`)
  }
  
  if (controleChakra >= 1.3) {
    jutsusHabilidadeGeral.push(`
[img]https://i.ibb.co/qB8cb9g/009-Copia.png[/img]
[u][b]Kinobori Shūgyō[/b][/u]
[color=#ff66ff][b]Rank:[/b] E[/color]
[b]Tipo:[/b] Suporte
[b]Classe:[/b] Habilidade Geral
[b]Requisito:[/b] Controle de Chakra (1.3 pontos)
[b]Descrição:[/b] Prática de Escalada em Árvore é um método de treinamento utilizado para obter mais habilidades com o controle de chakra. Este treinamento envolve focalizar uma quantia fixa de chakra para o fundo do seus pés, e usar isso para subir em uma árvore sem utilizar as mãos. Se o fluxo de chakra é muito fraco, o usuário perderá sua posição na árvore e cairá. Se ele for muito forte, o usuário será empurrado para longe da árvore, fazendo com que a árvore quebre em torno do ponto de contato e o usuário cairá. Apesar de ser comumente usado nos pés, o usuário pode também enviar o fluxo de chakra para as mãos e se apoiar sobre elas ou qualquer outra parte de seu corpo.`)
  }
  
  if (forca >= 2.0) {
    jutsusHabilidadeGeral.push(`
[img]https://i.ibb.co/XCnYrFc/048.png[/img]
[b][u]Gake Noborigyō[/u][/b]
[color=#ff66ff][b]Rank:[/b] E[/color]
[b]Tipo:[/b] Suporte
[b]Classe:[/b] Habilidade Geral
[b]Requisito:[/b] Força (2.0 pontos)
[b]Descrição:[/b] Este é um método de treinamento que envolve o escalamento de superfícies íngremes utilizando apenas um braço. Este treinamento se destina a melhorar a força e disciplina do usuário.
`)
  }
  
  if (ninjutsu >= 2) {
    // Sakki
    if (controleChakra >= 1.0 && constituicaoMental >= 1.0) {
      jutsusNinjutsu.push(`
[img]https://i.ibb.co/CvcMpNP/178.png[/img]
[u][b]Sakki[/b][/u]
[color=#0066ff][b]Rank:[/b] D[/color]
[b]Tipo:[/b] Ofensivo, Suporte
[b]Classe:[/b] Ninjutsu, Habilidade Geral
[b]Requisito:[/b] Controle de Chakra (1.0 ponto), Constituição Mental (1.0 ponto)
[b]Descrição:[/b] A Intenção Assassina é simplesmente o ato do usuário exalar uma pura intenção de matar, e afetando seu oponente, eles mesmos, e outros ao seu redor, a ponto de paralisar o oponente de terror. Quando a intenção é particularmente forte, ele pode fazer as vítimas terem visões de sua própria morte. Isto pode confundir o método com um genjutsu, apesar de ser apenas uma habilidade geral. Adversários mais experientes, no entanto, podem sentir a Intenção Assassina do usuário e interceptá-lo antes que desfira o golpe final. 
[b]Nota¹:[/b] Esta técnica reduz a Velocidade da vítima pela metade por 1 post se a Constituição Mental do usuário possuir pelo menos 1.0 pontos a mais que a da vítima;
[b]Nota²:[/b] Esta técnica paralisa a vítima completamente por 1 post se a Constituição Mental do usuário possuir pelo menos 2.0 pontos a mais que a da vítima;
[b]Nota³:[/b] Esta técnica, no entanto, dá à vítima a capacidade de "prever" o movimento ofensivo seguinte do post do usuário.`)
    }
    
    // Sunshin no Jutsu
    if (controleChakra >= 1.0) {
      jutsusNinjutsu.push(`
[img]https://i.servimg.com/u/f93/19/85/42/92/shunsh10.png[/img]
[u][b]Shunshin no Jutsu[/b][/u]
[b]Selos:[/b] Bode ou Selo do Confronto
[color=#0066ff][b]Rank:[/b] D[/color]
[b]Tipo:[/b] Suporte
[b]Classe:[/b] Ninjutsu, Habilidade Geral
[b]Requisito:[/b] Controle de Chakra (1.0 ponto)
[b]Descrição:[/b] A Técnica de Cintilação Corporal é uma técnica de movimento em alta velocidade em linha reta, permitindo que um ninja mova-se de uma curta para uma longa distância a uma velocidade quase indetectável. Para um observador, ele aparece como se o usuário tivesse teletransportado, embora seja apenas um movimento extremamente rápido. Uma baforada de fumaça é ocasionalmente usada para disfarçar os movimentos do usuário. Ela é realizada usando chakra para vitalizar temporariamente o corpo e se mover em velocidades extremas. A quantidade de chakra necessária depende da distância total e elevação entre o usuário e o destinatário. Diferentes vilas ocultas usualmente têm variações da Técnica de Cintilação Corporal, que envolvem algum elemento extra além do próprio movimento. O elemento extra é normalmente algum tipo de substância usada para distrair o oponente, como folhas ou areia, que o usuário pode utilizar livremente com esta técnica com base na sua criatividade. Shisui Uchiha, que era conhecido por seu uso desta técnica, era temido como "Shisui da Cintilação Corporal" (瞬身のシスイ, Shunshin no Shisui). Sempre que ele empregou esta técnica, Shisui desaparecia de vista, não deixando nenhum vestígio de sua presença.
[b]Nota¹:[/b] Aumenta a Velocidade do usuário em 0.7 pontos;
[b]Nota²:[/b] Esta técnica é usada apenas para fugas, aparições surpresa e viagens.`)
    }
  }
  
  if (ninjutsu >= 1) {
    if (controleChakra >= 2.0) {
      jutsusNinjutsu.push(`
[img]https://i.servimg.com/u/f93/19/85/42/92/04810.png[/img]
[u][b]Chakura Tensō[/b][/u]
[b]Selos:[/b] Bode
[color=#ff66ff][b]Rank:[/b] E[/color] ~ [color=#660066]S[/color]
[b]Tipo:[/b] Suporte
[b]Classe:[/b] Ninjutsu
[b]Requisito:[/b] Controle de Chakra (2.0 pontos)
[b]Descrição:[/b] Esta é uma técnica que permite ao usuário que transfira parte de seu chakra para outra pessoa. Essa técnica foi originalmente criada por Hagoromo Ōtsutsuki, a fim de "ligar" as energias espirituais de cada pessoa viva. Sua intenção era para que pudesse ser usada para construir e manter a paz através de sua religião de ninshū, mas esta técnica acabou se tornando mais uma ferramenta para a guerra, quando a humanidade armou o chakra. Essa técnica é utilizada por muitos shinobi, cada um deles mostrando uma maneira diferente de uso.
[b]Nota¹:[/b] Esta técnica permite transferir qualquer tipo de chakra em quantidade equivalente ao rank usado;
[b]Nota²:[/b] A quantidade de chakra transferido por esta técnica apenas repõe as reservas do alvo, e não as acresce;
[b]Nota³:[/b] Esta técnica requer todo o tempo de narração de um post para ser executada, podendo ser usada apenas uma vez por post. `)
    }
    
    if (cla === 'Kamizuru') {
    if (controleChakra >= 1.5) {
      jutsusNinjutsu.push(`
[img]https://i.servimg.com/u/f93/19/85/42/92/58967110.png[/img]
[u][b]Kuchiyose no Jutsu[/b][/u]
[b]Selos:[/b] Javali, Cão, Pássaro, Macaco, Bode
[color=#ff66ff][b]Rank:[/b] E[/color] ~ [color=#660066]S[/color]
[b]Tipo:[/b] Ofensivo, Defensivo, Suporte
[b]Classe:[/b] Ninjutsu, Jikūkan Ninjutsu
[b]Requisito:[/b] Controle de Chakra (1.5 pontos)
[b]Descrição:[/b] A Técnica de Invocação é um ninjutsu de espaço-tempo que permite que o invocador transporte animais ou pessoas através de longas distâncias instantaneamente através do sangue. Antes de uma invocação animal poder ser executada, um invocador candidato deve primeiro assinar um contrato com uma determinada espécie. O contrato vem na forma de um pergaminho, no qual o contratante usa seu próprio sangue para assinar o seu nome e colocar suas impressões digitais e, uma vez assinado, é válido mesmo após a morte dos contratantes, desde que o contrato em si permaneça intacto. Após isso, eles precisam apenas oferecer uma doação adicional de sangue na mão que assinou o contrato, moldar o seu chakra com selos de mão e, em seguida, plantar a mão que assinou o contrato em uma localização que deseja invocar a criatura. A quantidade de chakra usada durante a invocação determina o quão poderosa a criatura invocada pode ser.
[b]Nota¹:[/b] Esta técnica altera seu custo de acordo com o rank da criatura invocada;
[b]Nota²:[/b] Esta técnica permite invocar mais do que uma criatura de uma mesma espécie simultaneamente possuindo 2.0 pontos em Controle de Chakra, contanto que se gaste chakra individualmente para cada uma delas;
[b]Contrato:[/b] Abelhas.`)
    }
  }
    
    if (cla === 'Amagiri') {
    if (controleChakra >= 1.5) {
      jutsusNinjutsu.push(`
[img]https://i.servimg.com/u/f93/19/85/42/92/58967110.png[/img]
[u][b]Kuchiyose no Jutsu[/b][/u]
[b]Selos:[/b] Javali, Cão, Pássaro, Macaco, Bode
[color=#ff66ff][b]Rank:[/b] E[/color] ~ [color=#660066]S[/color]
[b]Tipo:[/b] Ofensivo, Defensivo, Suporte
[b]Classe:[/b] Ninjutsu, Jikūkan Ninjutsu
[b]Requisito:[/b] Controle de Chakra (1.5 pontos)
[b]Descrição:[/b] A Técnica de Invocação é um ninjutsu de espaço-tempo que permite que o invocador transporte animais ou pessoas através de longas distâncias instantaneamente através do sangue. Antes de uma invocação animal poder ser executada, um invocador candidato deve primeiro assinar um contrato com uma determinada espécie. O contrato vem na forma de um pergaminho, no qual o contratante usa seu próprio sangue para assinar o seu nome e colocar suas impressões digitais e, uma vez assinado, é válido mesmo após a morte dos contratantes, desde que o contrato em si permaneça intacto. Após isso, eles precisam apenas oferecer uma doação adicional de sangue na mão que assinou o contrato, moldar o seu chakra com selos de mão e, em seguida, plantar a mão que assinou o contrato em uma localização que deseja invocar a criatura. A quantidade de chakra usada durante a invocação determina o quão poderosa a criatura invocada pode ser.
[b]Nota¹:[/b] Esta técnica altera seu custo de acordo com o rank da criatura invocada;
[b]Nota²:[/b] Esta técnica permite invocar mais do que uma criatura de uma mesma espécie simultaneamente possuindo 2.0 pontos em Controle de Chakra, contanto que se gaste chakra individualmente para cada uma delas;
[b]Contrato:[/b] Besouros.`)
    }
  }
    
    if (cla === 'Hirasaka') {
    if (controleChakra >= 1.5) {
      jutsusNinjutsu.push(`
[img]https://i.servimg.com/u/f93/19/85/42/92/58967110.png[/img]
[u][b]Kuchiyose no Jutsu[/b][/u]
[b]Selos:[/b] Javali, Cão, Pássaro, Macaco, Bode
[color=#ff66ff][b]Rank:[/b] E[/color] ~ [color=#660066]S[/color]
[b]Tipo:[/b] Ofensivo, Defensivo, Suporte
[b]Classe:[/b] Ninjutsu, Jikūkan Ninjutsu
[b]Requisito:[/b] Controle de Chakra (1.5 pontos)
[b]Descrição:[/b] A Técnica de Invocação é um ninjutsu de espaço-tempo que permite que o invocador transporte animais ou pessoas através de longas distâncias instantaneamente através do sangue. Antes de uma invocação animal poder ser executada, um invocador candidato deve primeiro assinar um contrato com uma determinada espécie. O contrato vem na forma de um pergaminho, no qual o contratante usa seu próprio sangue para assinar o seu nome e colocar suas impressões digitais e, uma vez assinado, é válido mesmo após a morte dos contratantes, desde que o contrato em si permaneça intacto. Após isso, eles precisam apenas oferecer uma doação adicional de sangue na mão que assinou o contrato, moldar o seu chakra com selos de mão e, em seguida, plantar a mão que assinou o contrato em uma localização que deseja invocar a criatura. A quantidade de chakra usada durante a invocação determina o quão poderosa a criatura invocada pode ser.
[b]Nota¹:[/b] Esta técnica altera seu custo de acordo com o rank da criatura invocada;
[b]Nota²:[/b] Esta técnica permite invocar mais do que uma criatura de uma mesma espécie simultaneamente possuindo 2.0 pontos em Controle de Chakra, contanto que se gaste chakra individualmente para cada uma delas;
[b]Contrato:[/b] Nuibas.`)
    }
    
    equipamentos.push(`
[img]https://i93.servimg.com/u/f93/19/85/42/92/scree292.png[/img]
[b][u]Máscara Oni[/u][/b]
[b]Porte:[/b] Pequeno
[b]Quantidade:[/b] 1 unidade
[b]Descrição:[/b] A máscara Oni é um artefato simbólico com a aparência de um demônio, geralmente usado para eventos festivos e cerimoniais, como a passagem do ano novo lunar. A máscara Oni do clã Hirasaka, no entanto, serve para um propósito ainda mais místico e obscuro. Dizem que ela carrega a verdadeira forma de um demônio, que é selada através de um papel de selamento preso em sua testa. Quando um membro do clã Hirasaka a veste, ele é rapidamente possuído pelo espírito maligno, ganhando acesso à sua aparência e poderes.`)
  }
    
    if (controleChakra >= 0.8) {
      jutsusNinjutsu.push(`
[img]https://i.servimg.com/u/f93/19/85/42/92/dissip10.png[/img]
[u][b]Genjutsu Kai[/b][/u]
[b]Selos:[/b] Tigre
[color=#ff66ff][b]Rank:[/b] E[/color] ~ [color=#990099]S[/color]
[b]Tipo:[/b] Suporte
[b]Classe:[/b] Ninjutsu, Habilidade Geral
[b]Requisito:[/b] Controle de Chakra (0.8 pontos)
[b]Descrição:[/b] A Dissipação de Genjutsu é utilizada para libertar a si ou à outras pessoas de um genjutsu. Ao cair em um genjutsu, o chakra no cérebro do alvo passa a ficar sob o controle do seu inimigo. Interrompendo a circulação do chakra por um curto período de tempo, é possível quebrar a ilusão. Apesar disso, para que isso seja efetivo é necessário usar mais poder do que a pessoa que está aplicando o genjutsu. Caso o primeiro método falhe, ainda é possível escapar do genjutsu com auxílio externo, com um companheiro tocando-lhe e emitindo chakra para descontrolar a circulação do chakra no seu corpo. Um jinchūriki que formou uma boa relação com a sua bijū pode usufruir desse último método sempre que precisar.
[b]Nota°:[/b] Esta técnica varia seu rank e custo conforme o rank do genjutsu aplicado, gastando sempre meio rank (+) a mais do que o rank do genjutsu utilizado;
[b]Nota¹:[/b] O desconto de chakra da técnica pode ser descontado no próximo post, uma vez que o usuário desconhece a quantidade a ser descontada durante seu post de uso;
[b]Nota²:[/b] Para quebrar o genjutsu é necessário possuir pontos suficientes em Ninjutsu para se equiparar ao rank do genjutsu;
[b]Nota³:[/b] Para que esta técnica funcione individualmente é preciso ativá-la dentro do genjutsu efetuando o selo do tigre, embora personagens com mais pontos em selos possam fazê-lo sem necessitar do selo.`)
    }
    
    if (controleChakra >= 1.0) {
      jutsusNinjutsu.push(`
[img]https://i.ibb.co/3BwFMJT/012.png[/img]
[u][b]Henge no Jutsu[/b][/u]
[b]Selos:[/b] Cão, Javali, Bode (Ativar) Selo do Confronto (Cancelar)
[color=#ff66ff][b]Rank:[/b] E[/color]
[b]Tipo:[/b] Suporte
[b]Classe:[/b] Ninjutsu, Habilidade Geral
[b]Requisito:[/b] Controle de Chakra (1.0 ponto)
[b]Descrição:[/b] Dadas todas as missões ninja sendo atribuídas à — batalha, recolha de informações, diversões — este é um ninjutsu de valor inestimável. Ele é geralmente usado para se transformar o usuário em outras pessoas, mas também tem a capacidade de se transformar em animais, plantas e até mesmo objetos inanimados, como armas. Isto dá esta técnica uma grande quantidade de usos. Um shinobi habilidoso pode criar uma transformação perfeita, capaz de não ser distinguida visualmente com o artigo genuíno da cópia. Por outro lado, a transformação realizada por uma pessoa inexperiente terá diferenças óbvias. Será impossível enganar alguém com ela. Este é um dos ninjutsu mais básicos, como tal, a maioria dos shinobi sabem como realizá-lo. A técnica de transformação é considerada entre as técnicas de rank-E a mais difícil, uma vez que requer constante emissão de chakra mantendo mentalmente a forma. Em cima disso, o usuário seria, muito provavelmente, interagindo com o ambiente. Isso coloca pressão mental sobre um ninja inexperiente. Assim, a melhor maneira de determinar se ele é realmente uma transformação é causar esta pressão sobre o usuário; embora este é, naturalmente, nem sempre bem sucedida.
[b]Nota¹:[/b] Só modifica aparência corporal e as vestimentas do usuário, jamais se transforma em seres ou objetos que sejam amplamente diferentes das proporções do usuário;
[b]Nota²:[/b] Mesmo se transformando em armas ou objetos funcionais, a técnica não permite que o usuário reproduza os efeitos do artefato copiado.

[img]https://i.servimg.com/u/f93/19/85/42/92/tzocni33.png[/img]
[u][b]Bunshin no Jutsu[/b][/u]
[b]Selos:[/b] Bode, Cobra, Tigre
[color=#ff66ff][b]Rank:[/b] E[/color]
[b]Tipo:[/b] Suporte
[b]Classe:[/b] Ninjutsu, Bunshinjutsu, Habilidade Geral
[b]Requisito:[/b] Controle de Chakra (1.0 ponto)
[b]Descrição:[/b] A Técnica de Clonagem é um ninjutsu que cria uma cópia intangível de seu próprio corpo, sem qualquer substância. Uma vez que o próprio clone não tem a capacidade de atacar e, assim, só pode ser usado para confundir o inimigo, que é usado principalmente em combinação com outros ninjutsu. É uma técnica básica, mas dependendo da engenhosidade, pode ser utilizada de forma eficaz. Os clones podem não se dissipar quando eles entram em contato com algo. Estes clones podem ser facilmente distinguidos por pessoas com dōjutsu. Uma pessoa com olhos normais também pode distinguir os clones a partir do original, já que os clones não influenciam a área em torno de si com o seu movimento — ou seja, não vai levantar poeira, esmagar a grama, etc.`)
    }
    
    if (controleChakra >= 0.5) {
      jutsusNinjutsu.push(`
[img]https://i.servimg.com/u/f93/19/85/42/92/15710.png[/img]
[u][b]Kawarimi no Jutsu[/b][/u]
[b]Selos:[/b] Bode, Javali, Boi, Cão, Cobra
[color=#ff66ff][b]Rank:[/b] E[/color]
[b]Tipo:[/b] Armadilha, Suporte
[b]Classe:[/b] Ninjutsu, Habilidade Geral
[b]Requisito:[/b] Controle de Chakra (0.5 pontos)
[b]Descrição:[/b] Com esta técnica, os usuários substituem o seu próprio corpo por algum outro objeto, geralmente um bloco de madeira, no momento em que um ataque pousa. Isso cria uma ilusão de ótica, fazendo com que o inimigo pense que o ataque foi bem sucedido. A partir daí, o usuário pode usar o lapso de atenção do inimigo para atacar ou fugir do campo de batalha. Alguns papéis explosivos podem ser anexados à substituição em uma surpresa adicional. É um ninjutsu básico mesmo ensinado na Academia, mas é uma arte útil que pode ser aplicada em diversas situações.
[b]Nota¹:[/b] Requer material de proporções similares ao corpo do usuário para realizar a troca;
[b]Nota²:[/b] Esta técnica não pode ser usada contra outros jutsus, apenas contra armas e danos físicos comuns.

[img]https://i.ibb.co/Htm05b7/142.png[/img]
[u][b]Kakuremino no Jutsu[/b][/u]
[color=#ff66ff][b]Rank:[/b] E[/color]
[b]Tipo:[/b] Suporte
[b]Classe:[/b] Ninjutsu, Habilidade Geral
[b]Requisito:[/b] Controle de Chakra (0.5 pontos)
[b]Descrição:[/b] Esta técnica permite que um ninja possa se camuflar no ambiente através de um pano monocromático, tornando-se invisível para os métodos de detecção humanos. Konohamaru usa esta técnica constantemente no início da série para tentar enganar Naruto Uzumaki, mas usa disfarces baratos, como o disfarce de uma rocha quadrada com os buracos para os olhos, capas com estampas incorretas ou giradas em torno do ambiente da maneira errada, ou simplesmente não cobrindo-se completamente, dessa forma desfazendo a ilusão. No anime, ultrapassando os limites básicos da técnica, Magire Kakuremino desempenhou uma capa de invisibilidade pré-preparada, lhe permitindo a movimentação mesmo enquanto invisível. Sua versão detém de muitas semelhanças com o Tōton Jutsu de Jiraiya.
[b]Nota:[/b] Requer um tecido ou capa monocromática.

[img]https://i.servimg.com/u/f93/19/85/42/92/13530010.jpg[/img]
[u][b]Nawanuke no Jutsu[/b][/u]
[color=#ff66ff][b]Rank:[/b] E[/color]
[b]Tipo:[/b] Suporte
[b]Classe:[/b] Ninjutsu, Habilidade Geral
[b]Requisito:[/b] Controle de Chakra (0.5 pontos)
[b]Descrição:[/b] Uma técnica básica ensinada na academia, que permite que um ninja se liberte de cordas simples amarradas em suas mãos. Não se sabe como isto é feito ao certo, mas provavelmente se deva à flexibilidade das articulações do pulso do usuário alimentada por seu chakra.
`)
    }
  }
  
  localStorage.removeItem('idTopicoFicha');
  localStorage.removeItem('ninjutsu');
  localStorage.removeItem('taijutsu');
  localStorage.removeItem('genjutsu');
  localStorage.removeItem('controle-chakra');
  localStorage.removeItem('selos');
  localStorage.removeItem('constituicao-mental');
  localStorage.removeItem('resistencia');
  localStorage.removeItem('forca');
  localStorage.removeItem('velocidade');
  localStorage.removeItem('cla');
  
  jutsusHabilidadeGeral = jutsusHabilidadeGeral.join('|')
  jutsusNinjutsu = jutsusNinjutsu.join('|')
  jutsusFukuwajutsu = jutsusFukuwajutsu.join('|')
  equipamentos = equipamentos.join('|')
  marionetes = marionetes.join('|')
  modos = modos.join('|')
  
  jutsusHabilidadeGeral = jutsusHabilidadeGeral.toString().split('|').join('\n');
  jutsusNinjutsu = jutsusNinjutsu.toString().split('|').join('\n');
  jutsusFukuwajutsu = jutsusFukuwajutsu.toString().split('|').join('\n');
  equipamentos = equipamentos.toString().split('|').join('\n');
  marionetes = marionetes.toString().split('|').join('\n');
  modos = modos.toString().split('|').join('\n');
  
  var message = `[hide][spoiler="Habilidades Gerais"]${jutsusHabilidadeGeral}[/spoiler]

[spoiler="Ninjutsus"]${jutsusNinjutsu}[/spoiler]

[spoiler="Fukuwajutsus"]${jutsusFukuwajutsu}[/spoiler]

${(equipamentos.length > 0) ? `[spoiler="Equipamentos"]${equipamentos}[/spoiler]` : ''}${(marionetes.length > 0) ? `[spoiler="Marionetes"]${marionetes}[/spoiler]` : ''}${(modos.length > 0) ? `[spoiler="Modos"]${modos}[/spoiler]` : ''}[/hide]`

  if (idTopicoFicha) {
    alert('Sua ficha foi enviada, aguarde aprovação');
    $.post('/post', {
      t: idTopicoFicha,
      message: message,
      mode: 'reply',
      tid: $('[name="tid"]:first').val(),
      post: 1,
      attach_sig: 'on'
    });
  }
});
