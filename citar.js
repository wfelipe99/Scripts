"use strict";

$(window).load(function () {
  var chatbox_script = function chatbox_script() {
    var overrided = Chatbox.prototype.refresh;

    var _this = this;

    var textoCitado = '';
    $('.user-msg').each(function () {
      $(this).find(".user").append("<button class=\"chatbox-citar\" style=\"float: right;\">Citar</button");
    });
    $('.chatbox-citar').click(function () {
      textoCitado = $(this).parent().parent().find('.msg > span').text();
      textoCitado = "Cita\xE7\xE3o de Usu\xE1rio: \"".concat(textoCitado, "\"|").concat($('#message').val());
      $('#message').val(textoCitado);
      window.chatbox.send();
    });

    Chatbox.prototype.refresh = function (data) {
      overrided.call(this, data);
      $('.user-msg').each(function () {
        $(this).find(".user").append("<button class=\"chatbox-citar\" style=\"float: right;\">Citar</button");
      });
      $('.chatbox-citar').click(function () {
        textoCitado = $(this).parent().parent().find('.msg > span').text();
        textoCitado = "Cita\xE7\xE3o".concat(textoCitado, "|").concat($('#message').val());
        $('#message').val(textoCitado);
        window.chatbox.send();
      });
      $(".msg > span:contains('Citação')").each(function () {
        var textoComCitacao = $(this).text().split("|");
        var corTexto = $(this).css("color");
        var citacao = textoComCitacao[0];
        var resposta = textoComCitacao[1];
        $(this).hide();
        $(this).parent().append("<div class=\"citacao\" style=\"color: ".concat(corTexto, ";  border-left: 4px solid #AA00FF; border-radius: 5px; background-color: #dea02c; color: white; width: max-content; margin-left: 50px; margin-top: 10px; margin-bottom: 5px; padding: 5px; max-width: 70%;\"><p>Usu\xE1rio</p><p>").concat(citacao, "</p></div>"));
        $(this).parent().append("<span class=\"resposta\" style=\"color: ".concat(corTexto, "; margin-left: 50px;\">").concat(resposta, "</span>"));
      });
    };

    Chatbox.prototype.send = function (params) {
      if (!params) {
        params = $('form[name=\'post\']').serialize();
      }

      var data = params + '&method=send&archives=' + this.archives;
      $("#message").val('').focus();
      var self = this;
      $.ajax({
        url: this.actionsUrl,
        type: 'post',
        data: data,
        dataType: 'json',
        cache: false,
        success: function success(response) {
          self.refresh(response);
        }
      });
    };
  };

  var s = document.createElement('script');
  s.text = "(" + chatbox_script.toString() + ")();";
  $('object[data^="/chatbox"],iframe[src^="/chatbox"]').each(function () {
    try {
      $(this.contentDocument || this.contentWindow.document).find("#chatbox").closest("html").find("head").first().each(function () {
        this.appendChild(s.cloneNode(true));
      });
    } catch (a) {}
  });
});
