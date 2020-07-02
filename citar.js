"use strict";

/* Sistema de citação desenvolvido para uso exclusivo do Naruto Survival Gold. */
$(window).load(function () {
  var chatbox_script = function chatbox_script() {
    var overrided = Chatbox.prototype.refresh;
    var textoCitado = '';
    $('.user-msg').each(function () {
      $(this).find(".user").append("<button class=\"chatbox-citar\" style=\"float: right; border: 1px solid #b3b3b3; border-radius: 6px; background-color: #b3b3b3; padding: 5px 10px 5px 10px; margin-right: 10px;\">Citar</button");
    });
    $('.chatbox-citar').click(function () {
      var usuarioCitado = $(this).parent().find('.chatbox-username').text();
      var existeCitacao = $(this).parent().parent().find('.msg > .citacao').html();

      if (existeCitacao) {
        // Se o texto já foi citado, pegue apenas a resposta
        textoCitado = $(this).parent().parent().find('.msg > .resposta').html();
      } else {
        textoCitado = $(this).parent().parent().find('.msg > span').html();
      }

      textoCitado = "Cita\xE7\xE3o".concat(textoCitado, "|").concat(usuarioCitado, "|").concat($('#message').val());
      $('#message').val(textoCitado);
      window.chatbox.send();
    });
    $(".msg > span:contains('Citação')").each(function () {
      var textoComCitacao = $(this).html().split("|");
      var corTexto = $(this).css("color");
      var citacao = textoComCitacao[0].replace('Citação', '');
      citacao = citacao.split('&lt;strong&gt;').join("");
      citacao = citacao.split('&lt;/strong&gt;').join("");
      citacao = citacao.split('&lt;img').join("<img");
      citacao = citacao.split('&gt;').join(">");
      citacao = citacao.split('<strong>').join("");
      var citacaoTemImagem = citacao.includes('&lt;img src=');
      var citacaoTemStrong = citacao.includes('&lt;img src=');
      var usuarioCitado = textoComCitacao[1];
      var resposta = textoComCitacao[2];
      $(this).hide();
      $(this).parent().append("<div class=\"citacao\" style=\"color: ".concat(corTexto, ";  border-left: 4px solid #AA00FF; border-radius: 5px; background-color: #dea02c; color: white; width: max-content; margin-left: 50px; margin-top: 10px; margin-bottom: 5px; padding: 5px; max-width: 70%;\"><p style='color: #363534; font-weight: bold'>").concat(usuarioCitado, ":</p><p>").concat(citacao, "</p></div>"));
      $(this).parent().append("<span class=\"resposta\" style=\"color: ".concat(corTexto, "; margin-left: 50px;\">").concat(resposta, "</span>"));
    });

    Chatbox.prototype.refresh = function (data) {
      overrided.call(this, data);
      $('.user-msg').each(function () {
        $(this).find(".user").append("<button class=\"chatbox-citar\" style=\"float: right; border: 1px solid #b3b3b3; border-radius: 6px; background-color: #b3b3b3; padding: 5px 10px 5px 10px; margin-right: 10px;\">Citar</button");
      });
      $('.chatbox-citar').click(function () {
        var usuarioCitado = $(this).parent().find('.chatbox-username').text();
        var existeCitacao = $(this).parent().parent().find('.msg > .citacao').html();

        if (existeCitacao) {
          // Se o texto já foi citado, pegue apenas a resposta
          textoCitado = $(this).parent().parent().find('.msg > .resposta').html();
        } else {
          textoCitado = $(this).parent().parent().find('.msg > span').html();
        }

        textoCitado = "Cita\xE7\xE3o".concat(textoCitado, "|").concat(usuarioCitado, "|").concat($('#message').val());
        $('#message').val(textoCitado);
        window.chatbox.send();
      });
      $(".msg > span:contains('Citação')").each(function () {
        var textoComCitacao = $(this).html().split("|");
        var corTexto = $(this).css("color");
        var citacao = textoComCitacao[0].replace('Citação', '');
        citacao = citacao.split('&lt;strong&gt;').join("");
        citacao = citacao.split('&lt;/strong&gt;').join("");
        citacao = citacao.split('&lt;img').join("<img");
        citacao = citacao.split('&gt;').join(">");
        citacao = citacao.split('<strong>').join("");
        var citacaoTemImagem = citacao.includes('&lt;img src=');
        var citacaoTemStrong = citacao.includes('&lt;img src=');
        var usuarioCitado = textoComCitacao[1];
        var resposta = textoComCitacao[2];
        $(this).hide();
        $(this).parent().append("<div class=\"citacao\" style=\"color: ".concat(corTexto, ";  border-left: 4px solid #AA00FF; border-radius: 5px; background-color: #dea02c; color: white; width: max-content; margin-left: 50px; margin-top: 10px; margin-bottom: 5px; padding: 5px; max-width: 70%;\"><p style='color: #363534; font-weight: bold'>").concat(usuarioCitado, ":</p><p>").concat(citacao, "</p></div>"));
        $(this).parent().append("<span class=\"resposta\" style=\"color: ".concat(corTexto, "; margin-left: 50px;\">").concat(resposta, "</span>"));
      }); // Corrigir o scroll para descer automaticamente

      var intScroll = $('#chatbox').scrollTop(); // Pega o atual scroll da div

      $('#chatbox').scrollTop(intScroll + 1000);
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
    } catch (a) {
      console.log(a);
    }
  }); 
  // Nunca remover
  $('body').append('<div id="chatbox-citacao-RGSN" style="display: none">GSN</div>');
});
