$(window).load(function () {
  var chatbox_script = function chatbox_script() {
    var overrided = Chatbox.prototype.refresh;
    var overrided2 = Chatbox.prototype.send;
    var textoUsuario = '';

    var _this = this;

    $('.user-msg').each(function () {
      $(this).find(".user").append("<button class=\"chatbox-citar\" style=\"float: right;\">Citar</button");
    });
    $('.chatbox-citar').click(function () {
      textoUsuario = $(this).parent().parent().find('.msg > span').text();

      window.chatbox.send()
      _this.Chatbox.prototype.send(textoUsuario); // var input = $('#chatbox_footer form #message');
      // input.val(`"${textoUsuario}" ${input.val()}`);

    });

    Chatbox.prototype.refresh = function (data) {
      overrided.call(this, data);
      console.log(this);
      $('.user-msg').each(function () {
        $(this).find(".user").append("<button class=\"chatbox-citar\" style=\"float: right;\">Citar</button");
      });
      $('.chatbox-citar').click(function () {
        textoUsuario = $(this).parent().parent().find('.msg > span').text();
        textoUsuario = "<span>".concat(textoUsuario, "</span>");

        window.chatbox.send()
        _this.Chatbox.prototype.send(textoUsuario); // var input = $('#chatbox_footer form #message');
        // input.val(`"${textoUsuario}" ${input.val()}`);

      });
    };

    Chatbox.prototype.send = function (params) {
      console.log("".concat(params, " >> params SEND"));
      console.log(this);
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
