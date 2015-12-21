(function(){
  var boxes = document.getElementsByClassName('clickBox');

  for (var i = 0; i < boxes.length; i++){
    boxes[i].onclick = function(e){
      var a = this.getElementsByTagName('a')[0];

      if (a !== undefined)
        window.location.href = a.href;
    }
  }
})();
