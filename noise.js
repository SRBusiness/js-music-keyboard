$(document).ready( function() {
  $('.instrument').on('click','button', function(event) {
    // console.log(`Clicked on "${ $(this).html()}" `);
    let idTag = $(this).html() + "Audio"
    // console.log(idTag);
    var audio = document.getElementById(idTag);
    // console.log(audio)
    audio.play();
  });
});
