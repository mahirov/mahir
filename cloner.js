var cloner = {
  init: function() {
    var body = document.getElementsByTagName('body')[0];
    var element = document.getElementsByClassName('some-text')[0];

    for (var i = 0; i < 5; i++) {
      var cloned = element.cloneNode(true);

      body.appendChild(cloned);
    }
  }
};

window.onload = function () {
  // cloner.init();
};
