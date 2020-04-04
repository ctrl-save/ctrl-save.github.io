
(function($) {
  "use strict";

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };

  // Collapse now if page is not at top
  navbarCollapse();
  
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
  
   // flipbook functions
  $("#btn-sketchbook").click(function(){
    $("body").addClass("noScroll");
    $("#mainNav").addClass("menu-disable");
    $("#contactme").addClass("dim-background");
    $("#thenVsNow").addClass("dim-background");  
  });  
  
  $(".close").click(function(){
    $("body").removeClass("noScroll");
    $("#mainNav").removeClass("menu-disable");
    $("#contactme").removeClass("dim-background");
    $("#thenVsNow").removeClass("dim-background");  
  });

  // Refresh on browser resize
  // $(window).bind('resize', function(e)
  // {
  //   if (window.RT) 
  //     clearTimeout(window.RT);
  //   window.RT = setTimeout(function()
  //   {
  //     this.location.reload(false);
  //   }, 200);
  // });
  
  
  var screenWidth = GetWidth();
  if(screenWidth >= 1025)
  {
    $("#flipbook").turn({
      width: 900,
      height: 600,
      autoCenter: false
    });
  }
  else if(screenWidth >= 768 && screenWidth <= 1024)
  {
    $("#flipbook").turn({
      width: 600,
      height: 400,
      autoCenter: false
    });
  }
  else
  {
    $("#flipbook").turn({
      width: 372,
      height: 290,
      autoCenter: false
    });

    // flipbook functions
    $("#btn-sketchbook").click(function(){      
      $("#mainNav").addClass("display-disable");
    });  
    
    $(".close").click(function(){
      $("#mainNav").addClass("display-enable");
    });
  }

})(jQuery);

// Get width for current screen
function GetWidth() {
  return Math.max(
    document.documentElement["clientWidth"],
    document.body["scrollWidth"],
    document.documentElement["scrollWidth"],
    document.body["offsetWidth"],
    document.documentElement["offsetWidth"]
  );
}

// Get height for current screen
function GetHeight() {
  return Math.max(
    document.documentElement["clientHeight"],
    document.body["scrollHeight"],
    document.documentElement["scrollHeight"],
    document.body["offsetHeight"],
    document.documentElement["offsetHeight"]
  );
}


// Fade in elements on scroll
$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $("section")

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible")
    } else {
      $(tag).removeClass("visible")
    }
  }
})


// flipbook JS functions
// Get the modal
var modalBook = document.getElementById("modal-sketchbook");

// Get the button that opens the modal
var btnSketchbook = document.getElementById("btn-sketchbook");

// Get the <span> element that closes the modal
var spanBook = document.getElementById("close-sketchbook");

// When the user clicks the button, open the modal 
btnSketchbook.onclick = function() {
  modalBook.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanBook.onclick = function() {
  modalBook.style.display = "none";
}