// Gestão de páginas HTML
<button type="submit" class="btn btn-primary">Enviar</button>
<script src="https://code.jquery.com/jquery-3.5.1.min.js" type="text/javascript"></script>
<script type="text/javascript">
$(window).on('load', function () {
  var subject = 'Ficha User1010';
  var message = 'Mensagem inicial';
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
    location.href = '/forum';
  }).fail(function () {
    alert('Não foi possível enviar a sua ficha. Tente novamente.');
  });
});
</script>

// Gestão de códigos JavaScript
$(window).on('load', function () {
  var idTopicoFicha = localStorage.getItem('idTopicoFicha');
  localStorage.removeItem('idTopicoFicha');

  if (idTopicoFicha) {
    alert('Sua ficha foi enviada, aguarde aprovação');
    $.post('/post', {
      t: idTopicoFicha,
      message: 'Resposta inicial',
      mode: 'reply',
      tid: $('[name="tid"]:first').val(),
      post: 1,
      attach_sig: 'on'
    });
  }
});
