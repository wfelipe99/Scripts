"use strict";

$(document).ready(function () {
  // Permitir apenas números nos devidos campos
  $('#peso').keypress(function (event) {
    if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
      event.preventDefault();
    }
  });
  $('#altura').keypress(function (event) {
    if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
      event.preventDefault();
    }
  });
  $('#controle-chakra').keypress(function (event) {
    if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
      event.preventDefault();
    }
  });
  $('#controle-chakra-duplicado').keypress(function (event) {
    if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
      event.preventDefault();
    }
  });
  $('#selos').keypress(function (event) {
    if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
      event.preventDefault();
    }
  });
  $('#selos-duplicado').keypress(function (event) {
    if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
      event.preventDefault();
    }
  });
  $('#constituicao-mental').keypress(function (event) {
    if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
      event.preventDefault();
    }
  });
  $('#constituicao-mental-duplicado').keypress(function (event) {
    if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
      event.preventDefault();
    }
  });
  $('#resistencia').keypress(function (event) {
    if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
      event.preventDefault();
    }
  });
  $('#resistencia-duplicado').keypress(function (event) {
    if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
      event.preventDefault();
    }
  });
  $('#forca').keypress(function (event) {
    if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
      event.preventDefault();
    }
  });
  $('#forca-duplicado').keypress(function (event) {
    if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
      event.preventDefault();
    }
  });
  $('#velocidade').keypress(function (event) {
    if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
      event.preventDefault();
    }
  });
  $('#velocidade-duplicado').keypress(function (event) {
    if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
      event.preventDefault();
    }
  });
  $('#controle-chakra').keypress(function () {
    var controleChakraCounter = $('#controle-chakra').val().length;

    if (controleChakraCounter >= 3) {
      return false;
    }
  });
  $('#controle-chakra-duplicado').keypress(function () {
    var controleChakraCounter = $(this).val().length;

    if (controleChakraCounter >= 3) {
      return false;
    }
  });
  $('#selos').keypress(function () {
    var selosCounter = $('#selos').val().length;

    if (selosCounter >= 3) {
      return false;
    }
  });
  $('#selos-duplicado').keypress(function () {
    var selosCounter = $(this).val().length;

    if (selosCounter >= 3) {
      return false;
    }
  });
  $('#constituicao-mental').keypress(function () {
    var constituicaoMentalCounter = $('#constituicao-mental').val().length;

    if (constituicaoMentalCounter >= 3) {
      return false;
    }
  });
  $('#constituicao-mental-duplicado').keypress(function () {
    var constituicaoMentalCounter = $(this).val().length;

    if (constituicaoMentalCounter >= 3) {
      return false;
    }
  });
  $('#resistencia').keypress(function () {
    var resistenciaCounter = $('#resistencia').val().length;

    if (resistenciaCounter >= 3) {
      return false;
    }
  });
  $('#resistencia-duplicado').keypress(function () {
    var resistenciaCounter = $(this).val().length;

    if (resistenciaCounter >= 3) {
      return false;
    }
  });
  $('#forca').keypress(function () {
    var forcaCounter = $('#forca').val().length;

    if (forcaCounter >= 3) {
      return false;
    }
  });
  $('#forca-duplicado').keypress(function () {
    var forcaCounter = $(this).val().length;

    if (forcaCounter >= 3) {
      return false;
    }
  });
  $('#velocidade').keypress(function () {
    var velocidadeCounter = $('#velocidade').val().length;

    if (velocidadeCounter >= 3) {
      return false;
    }
  });
  $('#velocidade-duplicado').keypress(function () {
    var velocidadeCounter = $(this).val().length;

    if (velocidadeCounter >= 3) {
      return false;
    }
  });
  $('#nome').click(function () {
    $('#nome').val('');
  });
  
  $('#nome-duplicado').click(function() {
    $(this).val('')
  })
  
  $('#peso').click(function () {
    $('#peso').val('');
  });
  $('#altura').click(function () {
    $('#altura').val('');
  });
  $('#comida-favorita').click(function () {
    $('#comida-favorita').val('');
  });
  
  $('#comida-favorita-duplicado').click(function() {
    $(this).val('')
  })
  
  $('#hobbie').click(function () {
    $('#hobbie').val('');
  });
  
  $('#hobby-duplicado').click(function() {
    $(this).val('')
  })
  
  $('#tipo-comunicacao-animal').click(function () {
    $(this).val('');
  });
  $('#tipo-criatividade-elevada').click(function () {
    $(this).val('');
  });
  $('#tipo-alergia').click(function () {
    $(this).val('');
  });
  $('#tipo-estresse-pos-traumatico').click(function () {
    $(this).val('');
  });
  $('#tipo-fanatismo').click(function () {
    $(this).val('');
  });
  $('#tipo-fobia').click(function () {
    $(this).val('');
  });
  $('#tipo-vicio').click(function () {
    $(this).val('');
  });
  $('#tipo-deficiencia').click(function () {
    $(this).val('');
  });
  $('#tipo-doenca').click(function () {
    $(this).val('');
  });
  $('#tipo-doenca-terminal').click(function () {
    $(this).val('');
  });
});

$('#kekkei-genkai').change(function() {
  var kekkeiGenkai = $(this).val()
  
  if (kekkeiGenkai === 'Sōma no Kō') {
    $('#nome-duplicado-wrapper').show()
  $('#aviso-nome-duplicado').show()
  $('#orientacao-sexual-duplicado-wrapper').show()
  $('#lateralidade-duplicado-wrapper').show()
  $('#aviso-lateralidade-duplicado-wrapper').show()
  $('#comida-favorita-duplicado-wrapper').show()
  $('#hobby-duplicado-wrapper').show()
  $('#substatus-duplicado-wrapper').show()
    $("#cla option[value='Nenhum']").attr('selected','selected');
    $("#elemento-avancado option[value='Nenhum']").attr('selected','selected');
    $('#cla').attr('disabled', true);
    $('#elemento-avancado').attr('disabled', true);
  } else {
    $('#nome-duplicado-wrapper').hide()
  $('#aviso-nome-duplicado').hide()
  $('#orientacao-sexual-duplicado-wrapper').hide()
  $('#lateralidade-duplicado-wrapper').hide()
  $('#aviso-lateralidade-duplicado-wrapper').hide()
  $('#comida-favorita-duplicado-wrapper').hide()
  $('#hobby-duplicado-wrapper').hide()
  $('#substatus-duplicado-wrapper').hide()
    $("#cla option[value='Nenhum']").attr('selected','selected');
    $("#elemento-avancado option[value='Nenhum']").attr('selected','selected');
    $('#cla').attr('disabled', false);
    $('#elemento-avancado').attr('disabled', false);
  }
  
  if (kekkeiGenkai === 'Akagan' || kekkeiGenkai === 'Yome') {
    $("#cla option[value='Nenhum']").attr('selected','selected');
    $('#cla').attr('disabled', true);
  } else {
    $("#cla option[value='Nenhum']").attr('selected','selected');
    $('#cla').attr('disabled', false);
  }
  
  if (kekkeiGenkai === 'Demônio Ido' || kekkeiGenkai === 'Hansha Seishin' || kekkeiGenkai === 'Mangekyōgan') {
    $("#elemento-avancado option[value='Nenhum']").attr('selected','selected');
    $("#elemento-avancado").attr('disabled', true);
  } else {
    $("#elemento-avancado option[value='Nenhum']").attr('selected','selected');
    $("#elemento-avancado").attr('disabled', false);
  }
})

$(window).on('load', function (event) {
  // Esconder tipos das qualidades e defeitos
  $('#tipo-comunicacao-animal-wrapper').hide();
  $('#tipo-criatividade-elevada-wrapper').hide();
  $('#tipo-alergia-wrapper').hide();
  $('#tipo-estresse-pos-traumatico-wrapper').hide();
  $('#tipo-fanatismo-wrapper').hide();
  $('#tipo-fobia-wrapper').hide();
  $('#tipo-vicio-wrapper').hide();
  $('#tipo-deficiencia-wrapper').hide();
  $('#tipo-doenca-wrapper').hide();
  $('#tipo-doenca-terminal-wrapper').hide(); 
  
  // Soma no Ko
  $('#nome-duplicado-wrapper').hide()
  $('#aviso-nome-duplicado').hide()
  $('#orientacao-sexual-duplicado-wrapper').hide()
  $('#lateralidade-duplicado-wrapper').hide()
  $('#aviso-lateralidade-duplicado-wrapper').hide()
  $('#comida-favorita-duplicado-wrapper').hide()
  $('#hobby-duplicado-wrapper').hide()
  $('#substatus-duplicado-wrapper').hide()
  
  
  // Desativar as vilas não finalizadas
  $("#vila option[value='Vila Oculta da Folha (País do Fogo)']").hide();
  $("#vila option[value='Vila Oculta da Nuvem (País do Relâmpago)']").hide();
  $("#vila option[value='Cidade Shukuba (País do Fogo)']").hide();
  $("#vila option[value='Cidade Tanzaku (País do Fogo)']").hide();
  $("#cla option[value='Aburame']").hide();
  $("#cla option[value='Akimichi']").hide();
  $("#cla option[value='Hatake']").hide();
  $("#cla option[value='Hyūga']").hide();
  $("#cla option[value='Inuzuka']").hide();
  $("#cla option[value='Lee']").hide();
  $("#cla option[value='Nara']").hide();
  $("#cla option[value='Sarutobi']").hide();
  $("#cla option[value='Senju']").hide();
  $("#cla option[value='Shimura']").hide();
  $("#cla option[value='Uchiha']").hide();
  $("#cla option[value='Yamanaka']").hide();
  $("#cla option[value='Chinoike']").hide();
  $("#cla option[value='Yotsuki']").hide();
  $("#kekkei-genkai option[value='Sharingan']").hide();
  $("#kekkei-genkai option[value='Byakugan']").hide();
  $("#kekkei-genkai option[value='Ketsuryūgan']").hide();
  $("#elemento-avancado option[value='Enton (Chama)']").hide();
  $('#qualidades').change(function () {
    var qualidades = $(this).val().toString();

    if (qualidades.includes('Comunicação animal* [1 ponto]')) {
      $('#tipo-comunicacao-animal-wrapper').show();
    } else {
      $('#tipo-comunicacao-animal-wrapper').hide();
    }

    if (qualidades.includes('Criatividade elevada* [2 pontos]')) {
      $('#tipo-criatividade-elevada-wrapper').show();
    } else {
      $('#tipo-criatividade-elevada-wrapper').hide();
    }
  });
  $('#defeitos').change(function () {
    var defeitos = $('#defeitos').val().toString();

    if (defeitos.includes('Alergia* [1 ponto]')) {
      $('#tipo-alergia-wrapper').show();
    } else {
      $('#tipo-alergia-wrapper').hide();
    }

    if (defeitos.includes('Estresse pós-traumático* [1 ponto]')) {
      $('#tipo-estresse-pos-traumatico-wrapper').show();
    } else {
      $('#tipo-estresse-pos-traumatico-wrapper').hide();
    }

    if (defeitos.includes('Fanatismo* [1 ponto]')) {
      $('#tipo-fanatismo-wrapper').show();
    } else {
      $('#tipo-fanatismo-wrapper').hide();
    }

    if (defeitos.includes('Fobia* [1 ponto]')) {
      $('#tipo-fobia-wrapper').show();
    } else {
      $('#tipo-fobia-wrapper').hide();
    }

    if (defeitos.includes('Vício* [1 ponto]')) {
      $('#tipo-vicio-wrapper').show();
    } else {
      $('#tipo-vicio-wrapper').hide();
    }

    if (defeitos.includes('Deficiência* [2 pontos]')) {
      $('#tipo-deficiencia-wrapper').show();
    } else {
      $('#tipo-deficiencia-wrapper').hide();
    }

    if (defeitos.includes('Doença* [2 pontos]')) {
      $('#tipo-doenca-wrapper').show();
    } else {
      $('#tipo-doenca-wrapper').hide();
    }

    if (defeitos.includes('Doença terminal* [3 pontos]')) {
      $('#tipo-doenca-terminal-wrapper').show();
    } else {
      $('#tipo-doenca-terminal-wrapper').hide();
    }
  });
  $('#cla').change(function () {
    var cla = $(this).val(); // if ($('#cla').val() === 'Uchiha') {
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
      $("#elemento-basico option[value='Suiton (Água)']").attr('selected', 'selected');
    } else {
      $("#elemento-basico option[value='Nenhum']").attr('selected', 'selected');
    }

    if (cla === 'Kaguya') {
      $("#kekkei-genkai option[value='Shikotsumyaku']").attr('selected', 'selected');
    } else {
      $("#kekkei-genkai option[value='Nenhuma']").attr('selected', 'selected');
    }

    if (cla === 'Kurosuki') {
      $("#elemento-basico option[value='Raiton (Trovão)']").attr('selected', 'selected');
    } else {
      $("#elemento-basico option[value='Nenhum']").attr('selected', 'selected');
    }

    if (cla === 'Yuki') {
      $("#elemento-basico option[value='Nenhum']").attr('selected', 'selected');
      $("#elemento-basico option[value='Doton (Terra)']").hide();
      $("#elemento-basico option[value='Katon (Fogo)']").hide();
      $("#elemento-basico option[value='Raiton (Trovão)']").hide();
    } else {
      $("#elemento-basico option[value='Doton (Terra)']").show();
      $("#elemento-basico option[value='Katon (Fogo)']").show();
      $("#elemento-basico option[value='Raiton (Trovão)']").show();
    }

    if (cla === 'Kazekage') {
      $("#elemento-basico option[value='Nenhum']").attr('selected', 'selected');
      $("#elemento-basico option[value='Katon (Fogo)']").hide();
      $("#elemento-basico option[value='Raiton (Trovão)']").hide();
      $("#elemento-basico option[value='Suiton (Água)']").hide();
    } else {
      $("#elemento-basico option[value='Katon (Fogo)']").show();
      $("#elemento-basico option[value='Raiton (Trovão)']").show();
      $("#elemento-basico option[value='Suiton (Água)']").show();
    }

    if (cla === 'Kamizuru') {
      $("#elemento-basico option[value='Doton (Terra)']").attr('selected', 'selected');
    } else {
      $("#elemento-basico option[value='Nenhum']").attr('selected', 'selected');
    }

    if (cla === 'Jūgo') {
      $("#qualidades option[value='Comunicação animal* [1 ponto]']").attr('selected', 'selected');
      $('#qualidades').trigger("change");
      $('#tipo-comunicacao-animal').val('Aves');
      $('#tipo-comunicacao-animal').attr('disabled', true);
    } else {
      $("#qualidades option[value='Comunicação animal* [1 ponto]']").removeAttr('selected');
      $('#qualidades').trigger("change");
      $('#tipo-comunicacao-animal').val('');
      $('#tipo-comunicacao-animal').attr('disabled', false);
    }

    if (cla === 'Tenrō') {
      $("#qualidades option[value='Comunicação animal* [1 ponto]']").attr('selected', 'selected');
      $("#qualidades option[value='Olfato aguçado [1 ponto]']").attr('selected', 'selected');
      $('#qualidades').trigger("change");
      $('#tipo-comunicacao-animal').val('Canis lupus');
      $('#tipo-comunicacao-animal').attr('disabled', true);
    } else {
      $("#qualidades option[value='Comunicação animal* [1 ponto]']").removeAttr('selected');
      $("#qualidades option[value='Olfato aguçado [1 ponto]']").removeAttr('selected');
      $('#qualidades').trigger("change");
      $('#tipo-comunicacao-animal').val('');
      $('#tipo-comunicacao-animal').attr('disabled', false);
    }

    if (cla === 'Uzumaki') {
      $("#qualidades option[value='Recuperação acelerada [1 ponto]']").attr('selected', 'selected');
      $("#qualidades option[value='Recuperação acelerada [1 ponto]']").attr('disabled', true);
    } else {
      $("#qualidades option[value='Recuperação acelerada [1 ponto]']").removeAttr("selected");
      $("#qualidades option[value='Recuperação acelerada [1 ponto]']").attr('disabled', false);
    } // else if ($('#cla').val() === 'Yotsuki') {
    //   $("#elemento-basico option[value='Nenhum']").attr('selected','selected');
    //   $('#elemento-basico').attr('disabled', true)
    //   $("#elemento-basico option[value='Raiton (Terra)']").attr('selected','selected');
    //   elementoBasico = 'Raiton (Terra)'
    // }

  });
  $('#enviar').on('click', function (event) {
    event.preventDefault();
    var hp = 200;
    var ch = 200;
    var st = 200;
    var nome = $('#nome').val();
    var nomeDuplicado = $('#nome-duplicado').val();
    var sexo = $('#sexo').val();
    var orientacaoSexual = $('#orientacao-sexual').val();
    var orientacaoSexualDuplicado = $('#orientacao-sexual-duplicado').val();
    var idade = $('#idade').val();
    var peso = $('#peso').val();
    var altura = $('#altura').val();
    var aniversario = $('#aniversario').val();
    var sangue = $('#sangue').val();
    var lateralidade = $('#lateralidade').val();
    var lateralidadeDuplicado = $('#lateralidade-duplicado').val();
    var cla = $('#cla').val();
    var origem = $('#vila').val();
    var elementoBasico = $('#elemento-basico').val();
    var elementoAvancado = $('#elemento-avancado').val();
    var comidaFavorita = $('#comida-favorita').val()
    var comidaFavoritaDuplicado = $('#comida-favorita-duplicado').val()
    var hobby = $('#hobbie').val()
    var hobbyDuplicado = $('#hobby-duplicado').val()
    var kekkeiGenkai = $('#kekkei-genkai').val();
    var personalidade = $('#personalidade').val();
    var aparencia = $('#aparencia').val();
    var historia = $('#historia').val();
    var qualidadesSelecionadas = $('#qualidades').val();
    var familiaAnimal = $("#tipo-comunicacao-animal").val();
    var criatividadeElevada = $('#tipo-criatividade-elevada').val();
    var defeitosSelecionados = $('#defeitos').val();
    var alergia = $('#tipo-alergia').val();
    var estressePosTraumatico = $('#tipo-estresse-pos-traumatico').val();
    var fanatismo = $('#tipo-fanatismo').val();
    var fobia = $('#tipo-fobia').val();
    var vicio = $('#tipo-vicio').val();
    var deficiencia = $('#tipo-deficiencia').val();
    var doenca = $('#tipo-doenca').val();
    var doencaTerminal = $('#tipo-doenca-terminal').val();
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
    var controleChakraDuplicado = $('#controle-chakra-duplicado').val()
    var selosDuplicado = $('#selos-duplicado').val()
    var constituicaoMentalDuplicado = $('#constituicao-mental-duplicado').val()
    var resistenciaDuplicado = $('#resistencia-duplicado').val()
    var forcaDuplicado = $('#forca-duplicado').val()
    var velocidadeDuplicado = $('#velocidade-duplicado').val()
    var subject = `Ficha de ${(kekkeiGenkai === 'Sōma no Kō') ? `${nome} & ${nomeDuplicado}` : `${nome}`}`
    var erros = [];

    if (nome === '') {
      erros.push('Nome');
    }

    if (peso === '') {
      erros.push('Peso');
    }

    if (altura === '') {
      erros.push('Altura');
    }

    if (aparencia === '') {
      erros.push('Aparência');
    }

    if (personalidade === '') {
      erros.push('Personalidade');
    }

    if (historia === '') {
      erros.push('História');
    }
    
    if (aniversario === 'Indefinido') {
      erros.push('Aniversário');
    }
    
    if (sangue === 'Indefinido') {
      erros.push('Aniversário');
    }
    
    if (lateralidade === 'Indefinido') {
      erros.push('Aniversário');
    }
    
    if (kekkeiGenkai === 'Sōma no Kō') {
      if (lateralidadeDuplicado === 'Indefinido') {
        erros.push('Lateralidade do Corpo Secundário')
      }
    }

    if (erros.length > 0) {
      var erros = erros.toString().split(',').join('\n');
      alert("\xC9 obrigat\xF3rio preencher os seguintes campos:\n\n".concat(erros));
      return false;
    }

    if (elementoAvancado !== 'Nenhum') {
      if (kekkeiGenkai !== 'Nenhuma') {
        kekkeiGenkai = "".concat(kekkeiGenkai, ", ").concat(elementoAvancado);
      }
    }

    if (cla === 'Senju') {
      hp = 600;
      st = 600;
    } else if (cla === 'Uzumaki') {
      hp = 800;
      ch = 800;
    }

    if (elementoBasico === 'Doton (Terra)') {
      elementoBasico = 'Doton (Afinidade)';
    } else if (elementoBasico === 'Fūton (Vento)') {
      elementoBasico = 'Fūton (Afinidade)';
    } else if (elementoBasico === 'Katon (Fogo)') {
      elementoBasico = 'Katon (Afinidade)';
    } else if (elementoBasico === 'Raiton (Trovão)') {
      elementoBasico = 'Raiton (Afinidade)';
    } else if (elementoBasico === 'Suiton (Água)') {
      elementoBasico = 'Suiton (Afinidade)';
    }

    for (var qualidade in qualidadesSelecionadas) {
      if (qualidadesSelecionadas[qualidade] === 'Comunicação animal* [1 ponto]') {
        qualidadesSelecionadas[qualidade] = "Comunica\xE7\xE3o animal (".concat(familiaAnimal, ") [1 ponto]");
      }

      if (qualidadesSelecionadas[qualidade] === 'Criatividade elevada* [2 pontos]') {
        qualidadesSelecionadas[qualidade] = "Criatividade elevada (".concat(criatividadeElevada, ") [2 pontos]");
      }
    }

    for (var defeito in defeitosSelecionados) {
      if (defeitosSelecionados[defeito] === 'Alergia* [1 ponto]') {
        defeitosSelecionados[defeito] = "Alergia (".concat(alergia, ") [1 ponto]");
      }

      if (defeitosSelecionados[defeito] === 'Estresse pós-traumático* [1 ponto]') {
        defeitosSelecionados[defeito] = "Estresse p\xF3s-traum\xE1tico (".concat(estressePosTraumatico, ") [1 ponto]");
      }

      if (defeitosSelecionados[defeito] === 'Fanatismo* [1 ponto]') {
        defeitosSelecionados[defeito] = "Fanatismo (".concat(fanatismo, ") [1 ponto]");
      }

      if (defeitosSelecionados[defeito] === 'Fobia* [1 ponto]') {
        defeitosSelecionados[defeito] = "Fobia (".concat(fobia, ") [1 ponto]");
      }

      if (defeitosSelecionados[defeito] === 'Vício* [1 ponto]') {
        defeitosSelecionados[defeito] = "V\xEDcio (".concat(vicio, ")[1 ponto]");
      }

      if (defeitosSelecionados[defeito] === 'Deficiência* [2 pontos]') {
        defeitosSelecionados[defeito] = "Defici\xEAncia (".concat(deficiencia, ")[2 pontos]");
      }

      if (defeitosSelecionados[defeito] === 'Doença* [2 pontos]') {
        defeitosSelecionados[defeito] = "Doen\xE7a (".concat(doenca, ") [2 pontos]");
      }

      if (defeitosSelecionados[defeito] === 'Doença terminal* [3 pontos]') {
        defeitosSelecionados[defeito] = "Doen\xE7a terminal (".concat(doencaTerminal, ") [3 pontos]");
      }
    }

    var qualidades = qualidadesSelecionadas.toString().split(',').join('\n');
    var defeitos = defeitosSelecionados.toString().split(',').join('\n');
    var message = `[justify][center][size=18][b]Ficha de ${(kekkeiGenkai === 'Sōma no Kō') ? `${nome} & ${nomeDuplicado}` : `${nome}`}[/b][/size][/center]
	
	[b]Nome:[/b] ${nome} ${(kekkeiGenkai === 'Sōma no Kō') ? `& ${nomeDuplicado}`: ''}
	[b]Classe:[/b] Ninja
	[b]Sexo:[/b] ${sexo} 
    [b]Orientacao sexual:[/b] ${orientacaoSexual} ${(kekkeiGenkai === 'Sōma no Kō') ? `& ${orientacaoSexualDuplicado}`: ''}
	[b]Idade:[/b] ${idade} anos
	[b]Peso:[/b] ${peso} kg
	[b]Altura:[/b] ${altura} metros
	[b]Aniversário:[/b] ${aniversario}
	[b]Sangue:[/b] ${sangue}
	[b]Lateralidade:[/b] ${lateralidade} ${(kekkeiGenkai === 'Sōma no Kō') ? `& ${lateralidadeDuplicado}`: ''}
    [b]Comida favorita:[/b] ${comidaFavorita} ${(kekkeiGenkai === 'Sōma no Kō') ? `& ${comidaFavoritaDuplicado}`: ''}
    [b]Hobby:[/b] ${hobby} ${(kekkeiGenkai === 'Sōma no Kō') ? `& ${hobbyDuplicado}`: ''}
	[b]Clã:[/b] ${cla}
	[b]Origem:[/b] ${origem}
	[b]Elemento Básico:[/b] ${elementoBasico}
	[b]Elemento Avançado:[/b] ${elementoAvancado}
	[b]Kekkei Genkai:[/b] ${kekkeiGenkai}
	[spoiler="Personalidade"]${personalidade}[/spoiler]
	[spoiler="Aparência"]${aparencia}[/spoiler]
	[spoiler="História"]${historia}[/spoiler]
	[spoiler="Conhecimentos"]• --;
	• --;
	• --;
    [/spoiler]
	[spoiler="Individualidades"][b]Qualidades:[/b]
    [color=#009900]${qualidades}[/color]
	
    [b]Defeitos:[/b]
	[color=#ff0000]${defeitos}[/color][/spoiler]
	
	[center][b][size=16]Maestrias[/size][/b][/center]
	[b]Ninjutsu:[/b] ${ninjutsu} pontos
	[b]Taijutsu:[/b] ${taijutsu} pontos
	[b]Genjutsu:[/b] ${genjutsu} pontos
	[b]Shurikenjutsu:[/b] ${shurikenjutsu} pontos
	
	[center][b][size=16]Status[/size][/b][/center]
	[b]HP:[/b] ${hp} pontos
	[b]CH:[/b] ${ch} pontos
	[b]ST:[/b] ${st} pontos
	
	[center][b][size=16]Sub-status de ${nome}[/size][/b][/center]
	[b]Controle de Chakra:[/b] ${controleChakra} pontos
	[b]Selos:[/b] ${selos} pontos
	[b]Constituição mental:[/b] ${constituicaoMental} pontos
	[b]Resistência:[/b] ${resistencia} pontos
	[b]Força:[/b] ${forca} pontos
	[b]Velocidade:[/b] ${velocidade} pontos
    ${(kekkeiGenkai === 'Sōma no Kō') ? `[center][b][size=16]Sub-status de ${nomeDuplicado}[/size][/b][/center]
	[b]Controle de Chakra:[/b] ${controleChakraDuplicado} pontos
	[b]Selos:[/b] ${selosDuplicado} pontos
	[b]Constituição mental:[/b] ${constituicaoMentalDuplicado} pontos
	[b]Resistência:[/b] ${resistenciaDuplicado} pontos
	[b]Força:[/b] ${forcaDuplicado} pontos
	[b]Velocidade:[/b] ${velocidadeDuplicado} pontos` : ''}
[/justify]`
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
      localStorage.setItem("ninjutsu", ninjutsu);
      localStorage.setItem("taijutsu", taijutsu);
      localStorage.setItem("genjutsu", genjutsu);
      localStorage.setItem("shurikenjutsu", shurikenjutsu);
      localStorage.setItem("controle-chakra", controleChakra);
      localStorage.setItem("selos", selos);
      localStorage.setItem("constituicao-mental", constituicaoMental);
      localStorage.setItem("resistencia", resistencia);
      localStorage.setItem("forca", forca);
      localStorage.setItem("velocidade", velocidade);
       
      // location.href = '/forum';
    }).fail(function () {
      alert('Não foi possível enviar a sua ficha. Tente novamente.');
    });
  });
});
