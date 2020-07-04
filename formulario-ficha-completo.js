$(window).on('load', function() {
 
$('#qualidades').change(function() {
  var qualidades = $(this).val().toString()
  if (qualidades.includes('Comunicação animal* [1 ponto]')) {
  	$('#tipo-comunicacao-animal-wrapper').show()
  } else {
  	$('#tipo-comunicacao-animal-wrapper').hide()
  }
  
  if (qualidades.includes('Criatividade elevada* [2 pontos]')) {
    $('#tipo-criatividade-elevada-wrapper').show()
  } else {
    $('#tipo-criatividade-elevada-wrapper').hide()
  }
})
  
  $('#defeitos').change(function() {
    var defeitos = $('#defeitos').val().toString()
  if (defeitos.includes('Alergia* [1 ponto]')) {
  	$('#tipo-alergia-wrapper').show()
  } else {
  	$('#tipo-alergia-wrapper').hide()
  }
  
  if (defeitos.includes('Estresse pós-traumático* [1 ponto]')) {
    $('#tipo-estresse-pos-traumatico-wrapper').show()
  } else {
    $('#tipo-estresse-pos-traumatico-wrapper').hide()
  }
    
    if (defeitos.includes('Fanatismo* [1 ponto]')) {
  	$('#tipo-fanatismo-wrapper').show()
  } else {
  	$('#tipo-fanatismo-wrapper').hide()
  }
    
    if (defeitos.includes('Fobia* [1 ponto]')) {
  	$('#tipo-fobia-wrapper').show()
  } else {
  	$('#tipo-fobia-wrapper').hide()
  }
    
    if (defeitos.includes('Vício* [1 ponto]')) {
  	$('#tipo-vicio-wrapper').show()
  } else {
  	$('#tipo-vicio-wrapper').hide()
  }
    
    if (defeitos.includes('Deficiência* [2 pontos]')) {
  	$('#tipo-deficiencia-wrapper').show()
  } else {
  	$('#tipo-deficiencia-wrapper').hide()
  }
    
    if (defeitos.includes('Doença* [2 pontos]')) {
  	$('#tipo-doenca-wrapper').show()
  } else {
  	$('#tipo-doenca-wrapper').hide()
  }
    
    if (defeitos.includes('Doença terminal* [3 pontos]')) {
  	$('#tipo-doenca-terminal-wrapper').show()
  } else {
  	$('#tipo-doenca-terminal-wrapper').hide()
  }
})
  
  
$('#cla').change(function () {
  var cla = $(this).val()
  // if ($('#cla').val() === 'Uchiha') {
  //   $("#elemento-basico option[value='Nenhum']").attr('selected','selected');
  //   $('#elemento-basico').attr('disabled', true)
  //   $("#elemento-basico option[value='Katon (Fogo)']").attr('selected','selected');
  //   elementoBasico = 'Katon (Fogo)'
  // } else if ($('#cla').val() === 'Hatake') {
  //   $("#elemento-basico option[value='Nenhum']").attr('selected','selected');
  //   $('#elemento-basico').attr('disabled', true)
  //   $("#elemento-basico option[value='Doton (Terra)']").attr('selected','selected');
  //   elementoBasico = 'Doton (Terra)'
  // } else if ($('#cla').val() === 'Senju') {
  //   $('#elemento-basico').attr('disabled', false)
  //   $("#elemento-basico option[value='Nenhum']").attr('selected','selected');
  //   $("#elemento-basico option[value='Fūton (Vento)']").hide()
  //   $("#elemento-basico option[value='Katon (Fogo)']").hide()
  //   $("#elemento-basico option[value='Raiton (Trovão)']").hide()
  // } else if ($('#cla').val() === 'Shimura') {
  // if ($('#cla').val() === 'Shimura') {
  //   $("#elemento-basico option[value='Nenhum']").attr('selected','selected');
  //   $('#elemento-basico').attr('disabled', true)
  //   $("#elemento-basico option[value='Fūton (Vento)']").attr('selected','selected');
  //   elementoBasico = 'Fūton (Vento)'
  // } else if ($('#cla').val() === 'Hoshigaki' || $('#cla').val() === 'Hōzuki') {
  if (cla === 'Hoshigaki' || cla === 'Hōzuki') {
    $("#elemento-basico option[value='Suiton (Água)']").attr('selected','selected');
  } else {
    $("#elemento-basico option[value='Nenhum']").attr('selected','selected');
  }
  
  if (cla === 'Kaguya') {
    $("#kekkei-genkai option[value='Shikotsumyaku']").attr('selected','selected');
  } else {
    $("#kekkei-genkai option[value='Nenhuma']").attr('selected','selected');
  }
  
  if (cla === 'Kurosuki') {
    $("#elemento-basico option[value='Raiton (Trovão)']").attr('selected','selected');
  } else {
    $("#elemento-basico option[value='Nenhum']").attr('selected','selected');
  }
  
  if (cla === 'Yuki') {
    $("#elemento-basico option[value='Nenhum']").attr('selected','selected');
    $("#elemento-basico option[value='Doton (Terra)']").hide()
    $("#elemento-basico option[value='Katon (Fogo)']").hide()
    $("#elemento-basico option[value='Raiton (Trovão)']").hide()
  } else {
    $("#elemento-basico option[value='Doton (Terra)']").show()
    $("#elemento-basico option[value='Katon (Fogo)']").show()
    $("#elemento-basico option[value='Raiton (Trovão)']").show()
  }
  
  if (cla === 'Kazekage') {
    $("#elemento-basico option[value='Nenhum']").attr('selected','selected');
    $("#elemento-basico option[value='Katon (Fogo)']").hide()
    $("#elemento-basico option[value='Raiton (Trovão)']").hide()
    $("#elemento-basico option[value='Suiton (Água)']").hide()
  } else {
    $("#elemento-basico option[value='Katon (Fogo)']").show()
    $("#elemento-basico option[value='Raiton (Trovão)']").show()
    $("#elemento-basico option[value='Suiton (Água)']").show()
  }
  
  if (cla === 'Kamizuru') {
    $("#elemento-basico option[value='Doton (Terra)']").attr('selected','selected');
  } else {
    $("#elemento-basico option[value='Nenhum']").attr('selected','selected');
  }
  
  if (cla === 'Jūgo') {
    $("#qualidades option[value='Comunicação animal* [1 ponto]']").attr('selected','selected');
    $('#qualidades').trigger("change");
    $('#tipo-comunicacao-animal').val('Aves')
    $('#tipo-comunicacao-animal').attr('disabled', true)
  } else {
    $("#qualidades option[value='Comunicação animal* [1 ponto]']").removeAttr('selected');
    $('#qualidades').trigger("change");
    $('#tipo-comunicacao-animal').val('')
    $('#tipo-comunicacao-animal').attr('disabled', false)
  }
  
  if (cla === 'Tenrō') {
    $("#qualidades option[value='Comunicação animal* [1 ponto]']").attr('selected','selected');
    $("#qualidades option[value='Olfato aguçado [1 ponto]']").attr('selected','selected');
    $('#qualidades').trigger("change");
    $('#tipo-comunicacao-animal').val('Canis lupus')
    $('#tipo-comunicacao-animal').attr('disabled', true)
  } else {
    $("#qualidades option[value='Comunicação animal* [1 ponto]']").removeAttr('selected');
    $("#qualidades option[value='Olfato aguçado [1 ponto]']").removeAttr('selected');
    $('#qualidades').trigger("change");
    $('#tipo-comunicacao-animal').val('')
    $('#tipo-comunicacao-animal').attr('disabled', false)
  }
  
  if (cla === 'Uzumaki') {
    $("#qualidades option[value='Recuperação acelerada [1 ponto]']").attr('selected','selected');
    $("#qualidades option[value='Recuperação acelerada [1 ponto]']").attr('disabled', true)
  } else {
    $("#qualidades option[value='Recuperação acelerada [1 ponto]']").removeAttr("selected");
    $("#qualidades option[value='Recuperação acelerada [1 ponto]']").attr('disabled', false)
  }
  
  // else if ($('#cla').val() === 'Yotsuki') {
  //   $("#elemento-basico option[value='Nenhum']").attr('selected','selected');
  //   $('#elemento-basico').attr('disabled', true)
  //   $("#elemento-basico option[value='Raiton (Terra)']").attr('selected','selected');
  //   elementoBasico = 'Raiton (Terra)'
  // }
})

$('#enviar').on('click', function (event) {
  event.preventDefault();
  var hp = 200;
  var ch = 200;
  var st = 200;
  var nome = $('#nome').val();
  var sexo = $('#sexo').val();
  var idade = $('#idade').val();
  var peso = $('#peso').val();
  var altura = $('#altura').val();
  var aniversario = $('#aniversario').val();
  var sangue = $('#sangue').val();
  var lateralidade = $('#lateralidade').val();
  var cla = $('#cla').val();
  var origem = $('#vila').val();
  var elementoBasico = $('#elemento-basico').val();
  var elementoAvancado = $('#elemento-avancado').val();
  var kekkeiGenkai = $('#kekkei-genkai').val();
  var personalidade = $('#personalidade').val();
  var aparencia = $('#aparencia').val();
  var historia = $('#historia').val();
  
  var qualidadesSelecionadas = $('#qualidades').val()
  var familiaAnimal = $("#tipo-comunicacao-animal").val()
  var criatividadeElevada = $('#tipo-criatividade-elevada').val()
  
  var defeitosSelecionados = $('#defeitos').val();
  var alergia = $('#tipo-alergia').val()
  var estressePosTraumatico = $('#tipo-estresse-pos-traumatico').val()
  var fanatismo = $('#tipo-fanatismo').val()
  var fobia = $('#tipo-fobia').val()
  var vicio = $('#tipo-vicio').val()
  var deficiencia = $('#tipo-deficiencia').val()
  var doenca = $('#tipo-doenca').val()
  var doencaTerminal = $('#tipo-doenca-terminal').val()
  
  var ninjutsu = $('#ninjutsu').val();
  var taijutsu = $('#taijutsu').val();
  var genjutsu = $('#genjutsu').val();
  var shurikenjutsu = $('#shurikenjutsu').val();
  var controleChakra = $('#controle-chakra').val();
  var selos = $('#selos').val();
  var constituicaoMental = $('#constituicao-mental').val();
  var resistencia = $('#resistencia').val();
  var forca = $('#forca').val();
  var velocidade = $('#velocidade').val();
  var subject = `Ficha de ${cla} ${nome}`;
  
  if (elementoAvancado !== 'Nenhum') {
    if (kekkeiGenkai !== 'Nenhuma') {
      kekkeiGenkai = `${kekkeiGenkai}, ${elementoAvancado}`
    }
  }
  
  if (cla === 'Senju') {
    hp = 600
    st = 600
  } else if (cla === 'Uzumaki') {
    hp = 800
    ch = 800
  }
  
  if (elementoBasico === 'Doton (Terra)') {
    elementoBasico = 'Doton'
  } else if (elementoBasico === 'Fūton (Vento)') {
    elementoBasico = 'Fūton'
  } else if (elementoBasico === 'Katon (Fogo)') {
    elementoBasico = 'Katon'
  } else if (elementoBasico === 'Raiton (Trovão)') {
    elementoBasico = 'Raiton'
  } else if (elementoBasico === 'Suiton (Água)') {
    elementoBasico = 'Suiton'
  }
  
  for (const qualidade in qualidadesSelecionadas) {
    if (qualidadesSelecionadas[qualidade] === 'Comunicação animal* [1 ponto]') {
      qualidadesSelecionadas[qualidade] = `Comunicação animal (${familiaAnimal}) [1 ponto]`
    }
    
    if (qualidadesSelecionadas[qualidade] === 'Criatividade elevada* [2 pontos]') {
      qualidadesSelecionadas[qualidade] = `Criatividade elevada (${criatividadeElevada}) [2 pontos]`
    }
  }
  
  for (const defeito in defeitosSelecionados) {
    if (defeitosSelecionados[defeito] === 'Alergia* [1 ponto]') {
      defeitosSelecionados[defeito] = `Alergia (${alergia}) [1 ponto]`
    }
    
    if (defeitosSelecionados[defeito] === 'Estresse pós-traumático* [1 ponto]') {
      defeitosSelecionados[defeito] = `Estresse pós-traumático (${estressePosTraumatico}) [1 ponto]`
    }
    
    if (defeitosSelecionados[defeito] === 'Fanatismo* [1 ponto]') {
      defeitosSelecionados[defeito] = `Fanatismo (${fanatismo}) [1 ponto]`
    }
    
    if (defeitosSelecionados[defeito] === 'Fobia* [1 ponto]') {
      defeitosSelecionados[defeito] = `Fobia (${fobia}) [1 ponto]`
    }
    
    if (defeitosSelecionados[defeito] === 'Vício* [1 ponto]') {
      defeitosSelecionados[defeito] = `Vício (${vicio})[1 ponto]`
    }
    
    if (defeitosSelecionados[defeito] === 'Deficiência* [2 pontos]') {
      defeitosSelecionados[defeito] = `Deficiência (${deficiencia})[2 pontos]`
    }
    
    if (defeitosSelecionados[defeito] === 'Doença* [2 pontos]') {
      defeitosSelecionados[defeito] = `Doença (${doenca}) [2 pontos]`
    }
    
    if (defeitosSelecionados[defeito] === 'Doença terminal* [3 pontos]') {
      defeitosSelecionados[defeito] = `Doença terminal (${doencaTerminal}) [3 pontos]`
    }
  }
  
   var qualidades = qualidadesSelecionadas.toString().split(',').join('\n')
   var defeitos = defeitosSelecionados.toString().split(',').join('\n')
  
  var message = `[justify][center][size=18][b]Ficha de ${cla} ${nome}[/b][/size][/center]

[b]Nome:[/b] ${nome}
[b]Classe:[/b] Ninja
[b]Sexo:[/b] ${sexo}
[b]Idade:[/b] ${idade} anos
[b]Peso:[/b] ${peso} kg
[b]Altura:[/b] ${altura} metros
[b]Aniversário:[/b] ${aniversario}
[b]Sangue:[/b] ${sangue}
[b]Lateralidade:[/b] ${lateralidade}
[b]Clã:[/b] ${cla}
[b]Origem:[/b] ${origem}
[b]Elemento Básico:[/b] ${elementoBasico} (Afinidade)
[b]Elemento Avançado:[/b] ${elementoAvancado}
[b]Kekkei Genkai:[/b] ${kekkeiGenkai}
[spoiler="Personalidade"]${personalidade}[/spoiler]
[spoiler="Aparência"]${aparencia}[/spoiler]
[spoiler="História"]${historia}[/spoiler]
[spoiler="Conhecimentos"][/spoiler]
[spoiler="Individualidades"][b]Qualidades:[/b]

[color=#009900]${qualidades}[/color]

[b]Defeitos:[/b]

[color=#ff0000]${defeitos}[/color]
[/spoiler]

[center][b][size=16]Maestrias[/size][/b][/center]
[b]Ninjutsu: ${ninjutsu}[/b]
[b]Taijutsu: ${taijutsu}[/b]
[b]Genjutsu: ${genjutsu}[/b]
[b]Shurikenjutsu: ${shurikenjutsu}[/b]

[center][b][size=16]Status[/size][/b][/center]
[b]HP:[/b] ${hp} pontos
[b]CH:[/b] ${ch} pontos
[b]ST:[/b] ${st} pontos
${(cla === 'Yomi' ? '[b]CHMA:[/b] 200 pontos' : '')}

[center][b][size=16]Sub-status[/size][/b][/center]
[b]Controle de Chakra: ${controleChakra}[/b]
[b]Selos: ${selos}[/b]
[b]Constituição Mental: ${constituicaoMental}[/b]
[b]Resistência: ${resistencia}[/b]
[b]Força: ${forca}[/b]
[b]Velocidade: ${velocidade}[/b][/justify]`
  
  var description = 'Sem descrição';
  $.post('/post', {
    f: 11,
    subject: subject,
    message: message,
    description: description,
    mode: 'newtopic',
    tid: $('[name="tid"]:first').val(),
    attach_sig: 'on',
    post: 'Enviar',
    lt: 0
  }).done(function (response) {
    var html = response.split("<body")[1].split(">").slice(1).join(">").split("/body")[0];
    html = html.substring(0, html.length - 1);
    var href = $(html).find("a[title='".concat(subject, "']")).attr("href");
    var idTopico = href.split('-')[0].replace(/\D/g, "");
    localStorage.setItem("idTopicoFicha", idTopico);
    // location.href = '/forum';
  }).fail(function () {
    alert('Não foi possível enviar a sua ficha. Tente novamente.');
  });
});
})
