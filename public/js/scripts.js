// Mobile Menu


/* Sticky Menu Add Class and Animation */
jQuery(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 56) {
        jQuery(".headerWrap").addClass("stuck");
    }
    if (scroll <= 56) {
        jQuery(".headerWrap").removeClass("stuck")
    }
});


jQuery(document).ready(function () {
    jQuery('#responsive-menu-button').sidr({name: 'sidr-main', source: '.mainMenu'});
});


jQuery(document).ready(function () {

    $('.sidr ul li').append('<a class="arrow fa-solid fa-arrow-down">');

});


jQuery(document).ready(function () {
    $('.sidr ul li ul').hide();

    $('.sidr ul > li > a.arrow').on('click', function (e) {
        $('.sidr ul > li > a.arrow')
        //e.preventDefault();
        var elem = $(this).prev('.sidr ul li ul')
        $('.sidr ul li ul').not(elem).hide('slow');
        elem.toggle('slow');
        //console.log('.sidr ul li ul');
    });

});


jQuery(document).ready(function () {

    $('.sidebarMenu ul li').append('<a class="arrow">');
});


jQuery(document).ready(function () {
    $('.sidebarMenu ul li ul').hide();

    $('.sidebarMenu ul > li > a.arrow').on('click', function (e) {
        //e.preventDefault();
        var elem = $(this).prev('.sidebarMenu ul li ul')
        $('.sidebarMenu ul li ul').not(elem).hide('slow');
        elem.toggle('slow');
        //console.log('.sidr ul li ul');
    });

});

$(document).ready(function () {
    $(".arrow").click(function (e) {
        if ($(this).hasClass("open")) {
            // if it's open then just close it
            $(this).removeClass("open");
        } else {
            // if it's closed, then close everything else and open it
            $(".arrow").removeClass("open");
            $(this).addClass("open");
        }
    });
});

$(document).ready(function () {
    $(".left ul li").click(function () {  //use a class, since your ID gets mangled
        $(".left ul li").removeClass("active");      //add the class to the clicked element
        $(this).toggleClass("active");      //add the class to the clicked element
    });
});


/* Accordion */
jQuery(document).ready(function (jQuery) {
    jQuery('.accordionContent').hide();
    jQuery('.accordionBtn a').click(function () {
        if (jQuery(this).hasClass('selected')) {
            jQuery(this).removeClass('selected');
            jQuery(this).parent().next().slideUp();
        } else {
            jQuery('accordionBtn a').removeClass('selected');
            jQuery(this).addClass('selected');
            jQuery('.accordionContent').slideUp();
            jQuery(this).parent().next().slideDown();
        }
        return false;
    });
});


/* Sticky Menu Add Class and Animation */
jQuery(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 160) {
        jQuery(".headerWrap").addClass("stuck");
    }
    if (scroll <= 160) {
        jQuery(".headerWrap").removeClass("stuck")
    }
});


/* Search Icon */

jQuery('.searchIcon').click(function () {
    jQuery('.searchWrap').toggleClass("searchWrapShow");
});

jQuery('.searchClose').click(function () {
    jQuery('.searchWrap').toggleClass("searchWrapShow");
});

/* Mobile Menu Icon */
jQuery(document).ready(function () {
    jQuery('#navIcon').click(function () {
        jQuery(this).toggleClass('open');
        if (jQuery(this).hasClass('open')) {
            jQuery('body').addClass('overflow-hidden');
        } else {
            jQuery('body').removeClass('overflow-hidden');
        }
    });
});


/* Wow Animations */
wow = new WOW(
    {
        boxClass: 'wow',      // default
        animateClass: 'animated', // default
        offset: 0,          // default
        mobile: false,       // default
        live: true        // default
    }
)
wow.init();

// Scroll to Top

jQuery('.toTop').click(function () {
    //window.scrollTo(0, 0);
    jQuery('html').animate({
        scrollTop: 0
    }, 'slow'); //IE, FF
    jQuery('body').animate({
        scrollTop: 0
    }, 'slow'); //chrome, don't know if Safari works
});


// Image Popup
jQuery(document).ready(function () {
    jQuery('.popup').magnificPopup({
        disableOn: 700,
        type: 'image',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});

// Video Popup
jQuery(document).ready(function () {
    jQuery('.popup2').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});


jQuery(".slideOutShareBtn").click(function () {
    jQuery(".slideOutShare").toggleClass("open");
    return false;
});


jQuery(document).ready(function () {

    //--------------------------------
    // Parameters
    //--------------------------------
    //
    var fontSizeIncrement = 1.2;
    var fontSizeDecrement = 0.8;

    //--------------------------------
    // Selectors
    //--------------------------------
    //
    var resizeSelectors = ['p', 'a', 'span', 'input', 'textarea', 'select', 'h2', 'h3', 'h4', 'h5', 'h6', '.resizable'].join(', ');
    var highlightSelectors = ['a', 'button', '.accordionBtn', '.imgCardInner'].join(', ');

    //--------------------------------
    // Open Accessibility Button
    //--------------------------------
    //
    $('.accessibilityBtn').on('click', function (e) {
        e.preventDefault();
        $('#accessibility').toggleClass("open");
        return false;
    });

    //--------------------------------
    // Resize Font
    //--------------------------------
    //
    $(resizeSelectors).each(function () {

        // Selectors
        //
        var $el = $(this);

        // Parameters
        //
        var originalFontSize = $el.css('font-size');

        // Reset font size
        //
        $(".reset").on('click', function () {
            $el.css('font-size', originalFontSize);
        });

        // Increase font size
        //
        $(".increase").on('click', function () {
            var currentFontSize = parseFloat($el.css('font-size'));
            var newFontSize = currentFontSize * fontSizeIncrement;
            $el.css('font-size', newFontSize);
            return false;
        });

        // Decrease font size
        //
        $(".decrease").on('click', function () {
            var currentFontSize = parseFloat($el.css('font-size'));
            var newFontSize = currentFontSize * fontSizeDecrement;
            $el.css('font-size', newFontSize);
            return false;
        });
    });


});


//Hide programs custom fields if empty

jQuery('.programInfo tr').each(function (i) {
    var el = jQuery(this);
    if (!jQuery(el.find('td').get(1)).html()) el.hide();
});


var infoBtn = jQuery('.button.infoBtn');
if (!infoBtn.find('a').attr('href')) infoBtn.hide();