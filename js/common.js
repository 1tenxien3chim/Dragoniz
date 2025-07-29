// menu toggle
$(function () {
    var html = $('html, body'),
        navContainer = $('.nav-container'),
        navToggle = $('.nav-toggle'),
        navDropdownToggle = $('.has-dropdown');
    overlay = $("<div class='overlay'></div> ");
    overlay2 = $("<div class='overlay'></div> ");

    // Nav toggle
    navToggle.on('click', function (e) {
        overlay.toggle();
        var $this = $(this);
        e.preventDefault();
        $this.toggleClass('is-active');
        navContainer.toggleClass('is-visible');
        html.toggleClass('nav-open');
    });


    $("body").prepend(overlay);
    overlay.click(function () {
        navToggle.trigger('click');
        // $(this).toggle();
    })

    $("body").prepend(overlay2);
    overlay2.click(function () {
        $(this).toggle();
    })
    // Nav dropdown toggle
    navDropdownToggle.on('click', function () {
        var $this = $(this);
        $this.toggleClass('is-active').siblings().removeClass('is-active'); 
        if ($this.children('ul').hasClass('open-nav')) {
            $this.children('ul').removeClass('open-nav');
            $this.children('ul').slideUp(350);
        }
        else {
            $this.parent().parent().find('li .nav-dropdown').removeClass('open-nav');
            $this.parent().parent().find('li .nav-dropdown').slideUp(350);
            $this.children('ul').toggleClass('open-nav');
            $this.children('ul').slideToggle(350);
        }
    });

    // Prevent click events from firing on children of navDropdownToggle
    navDropdownToggle.on('click', '*', function (e) {
        e.stopPropagation();
    });


});

//scroll to top button
// ----------- croll --------------//
(function ($) {
    //Scroll to Top
    function headerStyle() {
        if ($('.header').length) {
            var windowpos = $(window).scrollTop();
            var scrollLink = $('.scroll-top');
            if (windowpos >= 185) {
                scrollLink.addClass('open');
            } else {
                scrollLink.removeClass('open');
            }
        }
    }
    headerStyle();
    // Scroll to Target
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }

    $(window).on('scroll', function () {
        headerStyle();
    });


})(window.jQuery);
$(".has-dropdown-1 .menu-link").click(function () {
    $(".product-dropdown").toggleClass("active");
});

//
// hover menu main
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector('.nav-container');
  const items = document.querySelectorAll('.nav-menu > .menu-item');
  const hoverBg = document.querySelector('.hover-bg');

  function moveHoverBgTo(el) {
    const rect = el.getBoundingClientRect();
    const containerRect = menu.getBoundingClientRect();

    const offsetLeft = rect.left - containerRect.left + 16; // cộng thêm 16px trái
    const width = rect.width - 0; // 

    hoverBg.style.left = offsetLeft + 'px';
    hoverBg.style.width = width + 'px';
  }

  // Hiển thị hover-bg ở mục active khi trang tải
  const activeItem = document.querySelector('.menu-item.is-active');
  if (activeItem) {
    moveHoverBgTo(activeItem);
  }

  // Khi hover vào menu item
  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      moveHoverBgTo(item);
    });
  });

  // Khi rời khỏi menu → trở lại vị trí active
  menu.addEventListener('mouseleave', () => {
    if (activeItem) {
      moveHoverBgTo(activeItem);
    } else {
      hoverBg.style.width = '0';
    }
  });
});
//

$(".slider-main").owlCarousel({
    items: 1,
    responsive: {
        1200: { items: 1 },
        992: { items: 1 },
        768: { items: 1 },
        480: { items: 1 },
        0: { items: 1 }
    },
    rewind: false,
    autoplay: false,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    smartSpeed: 5000,
    dots: true,
    dotsEach: false,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    margin: 30,
    center: false,
    video: false
});
