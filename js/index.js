$(document).ready(function(e) {
  var width = $(document).width();
  if (width >= 699){
    $("#animate").css("right", -width)

    $("#animate").animate({
      right: (width * .00005)
    }, 2500, function() {
      // Animation complete.
    });

  function pulse() {
    var pulseAmount = 0;
    $('#old-school').animate({
      height: '550px'
      }, 400, function() {
      // First animate complete
        $('#old-school').animate({
          height: '468px'
         }, 400, function() {
          // Second animate complete
           $('#old-school').removeAttr('style');
        });
    });
  };

   setTimeout(pulse, 2500);
   setTimeout(pulse, 3200);

  }
//smoothscroll
  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
});
