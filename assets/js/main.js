(function($){
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Mobile Menu 
    
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass('active');
    });
    
    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });
    
    
    //===== close navbar-collapse when a  clicked
    
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navigation").removeClass("sticky");
        } else{
            $(".navigation").addClass("sticky");
        }
    });
    
    
    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
        // Active link switching
        $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

          var sectionOffset = $(this.hash).offset().top - 73;

          if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        });
    });
    
    
    
    // Parallaxmouse js
    
    function parallaxMouse() {
        if ($('#parallax').length) {
            var scene = document.getElementById('parallax');
            var parallax = new Parallax(scene);
        };
    };
    parallaxMouse();
    
    
    //===== Progress Bar
    
    if($('.progress-line').length){
        $('.progress-line').appear(function(){
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width',percent+'%');
        },{accY: 0});
    }
    
    
    //===== Counter Up
    
    $('.counter').counterUp({
        delay: 10,
        time: 1600,
    });
    
    
    //===== Magnific Popup
    
    $('.image-popup').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
    
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    

    
    //===== 
    // Before/After compare init
    function initBeforeAfter(){
        $('.ba-compare').each(function(){
            var $wrap = $(this);
            var $before = $wrap.find('.ba-before');
            var $line = $wrap.find('.ba-line');
            var $handle = $wrap.find('.ba-handle');
            var initial = parseInt($wrap.attr('data-initial') || 50, 10);
            setPosition(initial);
            function setPosition(percent){
                percent = Math.max(0, Math.min(100, percent));
                var w = $wrap.width();
                var pos = (percent/100) * w;
                $before.css('width', percent+'%');
                $line.css('left', pos+'px');
                $handle.css('left', pos+'px');
            }
            function getPageX(ev){
                if(ev.type.indexOf('touch') === 0){
                    var t = ev.originalEvent.touches[0] || ev.originalEvent.changedTouches[0];
                    return t.pageX;
                }
                return ev.pageX;
            }
            function updateByEvent(ev){
                var offset = $wrap.offset().left;
                var x = getPageX(ev) - offset;
                var percent = (x / $wrap.width()) * 100;
                setPosition(percent);
            }
            $wrap.on('mousedown touchstart', function(ev){
                updateByEvent(ev);
                $(document).on('mousemove.ba touchmove.ba', updateByEvent);
                $(document).on('mouseup.ba touchend.ba touchcancel.ba', function(){
                    $(document).off('mousemove.ba touchmove.ba mouseup.ba touchend.ba touchcancel.ba');
                });
            });
        });
        $(window).on('resize', function(){
            $('.ba-compare').each(function(){
                var $wrap = $(this);
                var $before = $wrap.find('.ba-before');
                var $line = $wrap.find('.ba-line');
                var $handle = $wrap.find('.ba-handle');
                var percent = parseFloat($before.width() / $wrap.width() * 100);
                var w = $wrap.width();
                var pos = (percent/100) * w;
                $line.css('left', pos+'px');
                $handle.css('left', pos+'px');
            });
        });
    }
    $(window).on('load', initBeforeAfter);

    // Servicios: flechas para scroll horizontal
    function initServicesArrows(){
        var $container = $('#services-scroll');
        if(!$container.length) return;
        var step = Math.round($container.width() * 0.8); // desplazar aprox una tarjeta
        $('.services-prev').on('click', function(){
            $container.animate({scrollLeft: $container.scrollLeft() - step}, 300);
        });
        $('.services-next').on('click', function(){
            $container.animate({scrollLeft: $container.scrollLeft() + step}, 300);
        });
    }
    $(window).on('load', initServicesArrows);
    
    
    
    
    
    
    
    
    
    
    
}(jQuery));