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
  
  var jutsusHabilidadeGeral = []
  var jutsusNinjutsu = []
  var jutsusFukuwajutsu = []
  
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
  
  jutsusHabilidadeGeral = jutsusHabilidadeGeral.join('|')
  jutsusNinjutsu = jutsusNinjutsu.join('|')
  jutsusFukuwajutsu = jutsusFukuwajutsu.join('|')
  
  jutsusHabilidadeGeral = jutsusHabilidadeGeral.toString().split('|').join('\n');
  jutsusNinjutsu = jutsusNinjutsu.toString().split('|').join('\n');
  jutsusFukuwajutsu = jutsusFukuwajutsu.toString().split('|').join('\n');
  
  var message = `[spoiler="Habilidade Geral"]${jutsusHabilidadeGeral}[/spoiler]
[spoiler="Ninjutsu"]${jutsusNinjutsu}[/spoiler]
[spoiler="Fukuwajutsu"]${jutsusFukuwajutsu}[/spoiler]`

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
