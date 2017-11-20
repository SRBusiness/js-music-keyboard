const playNote = function playNote(note) {
  let idTag = note + "Audio";
  let audio = document.getElementById(idTag);
  audio.play();
};

$(document).ready( function() {
  $('.instrument').on('click','button', function(event) {
    playNote($(this).html());
  });

  let notes = ['c','d','e','f','g','a','b'];
  $('body').keydown((event) => {
    if (notes.includes(event.key)){
      playNote(event.key);
    }
  });
});
