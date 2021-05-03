$(window).on("load",function() {               //Fade in scrolling effect
  $(window).scroll(function() {
    let windowBottom = $(this).scrollTop() + $(this).innerHeight() + 200;
    $(".fade").each(function() {
      /* Check the location of each desired element */
      let objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
         if ($(this).css("opacity") == 0) {
            $(this).fadeTo(500, 1);
         }
      } 
    });
  }).scroll(); //invoke scroll-handler on page-load
});