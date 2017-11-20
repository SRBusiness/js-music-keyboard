$(document).ready( function() {
  $('.instrument').on('click','button', function(event) {
    console.log(`Clicked on <audio> "${ $(this).html()}" `);
  });
});
// //   $('#my-list').on('click', 'li', function(event) {
//     alert(`Got a click on an <li> containing "${$(this).html()}"`);
//   });
//
//   $('#my-list').append($('<li>Herbie Hancock</li>'));
