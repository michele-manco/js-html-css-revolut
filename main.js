// $('.menu-items').click(function(){
//   $(this).children('.dropd-menu').slideToggle();
// })



// $('.menu-items').click(function() {
//   if ($(this).children('.dropd-menu').is(':visible')) {
//       $('.dropd-menu').slideUp();
//   } else {
//       $('.dropd-menu').slideUp();
//       $(this).children('.dropd-menu').slideDown()
//   }
//
// });



$('.menu-items').click(function() {

  $('.dropd-menu').slideUp();

  if (!$(this).children('.dropd-menu').is(':visible')) {
      $(this).children('.dropd-menu').slideDown()
  }

});
