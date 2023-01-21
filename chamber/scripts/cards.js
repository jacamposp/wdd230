$(document).ready(function(){
    var zindex = 10;
    
    $(".event-card").click(function(e){
      e.preventDefault();
    
      var isShowing = false;
  
      if ($(this).hasClass("show")) {
        isShowing = true
      }
  
      if ($(".gallery").hasClass("showing")) {
        // a card is already in view
        $(".event-card.show")
          .removeClass("show");
  
        if (isShowing) {
          // this card was showing - reset the grid
          $(".gallery")
            .removeClass("showing");
        } else {
          // this card isn't showing - get in with it
          $(this)
            .css({zIndex: zindex})
            .addClass("show");
  
        }
  
        zindex++;
  
      } else {
        // no cards in view
        $(".gallery")
          .addClass("showing");
        $(this)
          .css({zIndex:zindex})
          .addClass("show");
  
        zindex++;
      }
      
    });
  });