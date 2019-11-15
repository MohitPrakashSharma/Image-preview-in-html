var loadFile = function(event) {
  var image = document.getElementById('output');
  image.src = URL.createObjectURL(event.target.files[0]);
};


jQuery(".close").on("click", function(){
  jQuery('#output').attr('src','');
  jQuery('#file').val('');
});