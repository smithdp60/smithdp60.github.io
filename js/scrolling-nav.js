//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    $("#dpssmall").hide();
    $('.navbar').hide().delay(1500).fadeIn(2000);
    $('#dps').hide().delay(900).fadeIn(2000);

    $('#dpssmall').css({
        '-webkit-transform': 'rotate(0deg)',
        'transform': 'rotate(0deg)'
    });


    $("#semitone").hide();
    $("#sofaspud").hide();
    $("#getitdone").hide();
    $("#tictactoe").hide();
    $("#aptitune").hide();
    $("#mozaiq").hide();

    //work section – on hover
    $("#aptitune-thumb").mouseenter(function() {
        $("#aptitune").fadeIn("fast");
    }).mouseleave(function() {
        $("#aptitune").fadeOut("fast");
    })

    $("#semitone-thumb").mouseenter(function() {
        $("#semitone").fadeIn("fast");
    }).mouseleave(function() {
        $("#semitone").fadeOut("fast");
    })

    $("#sofaspud-thumb").mouseenter(function() {
        $("#sofaspud").fadeIn("fast");
    }).mouseleave(function() {
        $("#sofaspud").fadeOut("fast");
    })

    $("#getitdone-thumb").mouseenter(function() {
        $("#getitdone").fadeIn("fast");
    }).mouseleave(function() {
        $("#getitdone").fadeOut("fast");
    })

    $("#tictactoe-thumb").mouseenter(function() {
        $("#tictactoe").fadeIn("fast");
    }).mouseleave(function() {
        $("#tictactoe").fadeOut("fast");
    })

    $("#mozaiq-thumb").mouseenter(function() {
        $("#mozaiq").fadeIn("fast");
    }).mouseleave(function() {
        $("#mozaiq").fadeOut("fast");
    })


});


$(window).scroll(function() {
    if ($(".navbar").offset().top > 600 && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $("#name").addClass("hide-brand").hide();
        $("#dev").addClass("hide-brand").hide();
        $("#dpssmall").fadeIn(500);

        //logo spin on scroll
        $(window).scroll(function() {
            var theta = $(window).scrollTop() / 150;
            $('#dpssmall').css({ transform: 'rotate(' + theta + 'rad)' });
        });

        $('#dpssmall').css({
            '-webkit-transition' : 'none',
            'transition' : 'none',
            '-webkit-transform': 'rotate(0deg)',
            'transform': 'rotate(0deg)'
        });

        $.fn.scrollStopped = function(callback) {
            $(window).scroll(function(){
                if ($(window).data('scrollTimeout')) {
                    clearTimeout($(window).data('scrollTimeout'));
                }
                $(window).data('scrollTimeout', setTimeout(callback,1300,self));
            });
        };

        $(window).scrollStopped(function(){
            $('#dpssmall').css({
                '-webkit-transition' : '.4s ease-in-out',
                'transition' : '.4s ease-in-out',
                '-webkit-transform': 'rotate(0deg)',
                'transform': 'rotate(0deg)'
            });
        });


        //logo back to normal on hover
        $('#dpssmall').hover(function() {
            $('#dpssmall').css({
                '-webkit-transition' : 'all .4s ease-in-out',
                'transition' : 'all .4s ease-in-out',
                '-webkit-transform': 'rotate(360deg)',
                'transform': 'rotate(360deg)'
            });
        }, function() {
            $('#dpssmall').css({
                '-webkit-transition' : 'none',
                'transition' : 'none',
                '-webkit-transform': 'rotate(0deg)',
                'transform': 'rotate(0deg)'
            });
        });

    } else if ($(".navbar").offset().top < 600) {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $("#dpssmall").hide();
        $("#name").removeClass("hide-brand").fadeIn(1000);
        $("#dev").removeClass("hide-brand").fadeIn(1000);
    }

});

