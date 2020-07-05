$(window).on('load', function () {
  var samurai = localStorage.getItem('samurai')
  
  if (samurai) {
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
  localStorage.removeItem('samurai');
  
  var message = `[hide][spoiler="Taijutsus"][/spoiler]

[spoiler="Kenjutsus"][/spoiler]

[spoiler="Bōjutsus"][/spoiler]

[spoiler="Kyūjutsus"][/spoiler][/hide]`

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
  }
});
