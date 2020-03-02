var cloner = {
  init: function() {
    var body = document.getElementsByTagName('body')[0];
    var element = document.getElementsByClassName('post')[0];

    for (var i = 0; i < 5; i++) {
      var cloned = element.cloneNode(true);

      body.appendChild(cloned);
    }

    var likes = document.getElementsByClassName('like-number');
    for (var i = 0; i < likes.length; i++) {
      likes[i].textContent = Math.floor(Math.random() * 500);
    }
  }
};

window.onload = function () {
  cloner.init();
};
