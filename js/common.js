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
if (window.innerWidth >= 992) {
    document.addEventListener('DOMContentLoaded', () => {
        updateActiveNeighbors();
        initHoverEvents();
    });

    function updateActiveNeighbors() {
        const items = document.querySelectorAll('#menu-main > li');
        items.forEach(item => {
            item.classList.remove('prev-active', 'next-active');
        });
        items.forEach((item, index) => {
            if (item.classList.contains('is-active')) {
                if (index > 0) {
                    items[index - 1].classList.add('prev-active');
                }
                if (index < items.length - 1) {
                    items[index + 1].classList.add('next-active');
                }
            }
        });
    }

    function initHoverEvents() {
        const items = document.querySelectorAll('#menu-main > li');
        items.forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                item.classList.add('hovered');
                if (index > 0) {
                    items[index - 1].classList.add('prev-hovered');
                }
                if (index < items.length - 1) {
                    items[index + 1].classList.add('next-hovered');
                }
            });
            item.addEventListener('mouseleave', () => {
                item.classList.remove('hovered');
                if (index > 0) {
                    items[index - 1].classList.remove('prev-hovered');
                }
                if (index < items.length - 1) {
                    items[index + 1].classList.remove('next-hovered');
                }
            });
        });
    }
}

//
// lenguage home
  const selector = document.getElementById('languageSelector');
  const selected = document.getElementById('selectedLang');
  const options = document.getElementById('langOptions');
  const arrow = document.getElementById('arrow');

  selected.addEventListener('click', () => {
    const isOpen = options.style.display === 'block';
    options.style.display = isOpen ? 'none' : 'block';
    arrow.classList.toggle('open', !isOpen);
  });

  document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', () => {
      selected.childNodes[0].textContent = option.textContent + ' ';
      options.style.display = 'none';
      arrow.classList.remove('open');
      // Xử lý thay đổi ngôn ngữ tại đây nếu cần
      console.log("Đã chọn:", option.dataset.lang);
    });
  });

  document.addEventListener('click', function(e) {
    if (!selector.contains(e.target)) {
      options.style.display = 'none';
      arrow.classList.remove('open');
    }
  });
//
// đếm số
 function countUp(element, target, duration) {
  let start = 0;
  let startTime = null;

  function update(currentTime) {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const current = Math.floor(progress * target);
    element.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target;
    }
  }

  requestAnimationFrame(update);
}

document.addEventListener("DOMContentLoaded", () => {
  const rowCount = document.querySelector(".row-count");
  if (!rowCount) return;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = rowCount.querySelectorAll(".count-up");
        counters.forEach(el => {
          const target = parseInt(el.getAttribute("data-target"), 10);
          countUp(el, target, 3000); // Thời gian chạy (ms)
        });
        observer.unobserve(entry.target); // Chỉ chạy 1 lần
      }
    });
  }, {
    threshold: 0.5 // 50% vào tầm nhìn mới chạy (có thể điều chỉnh)
  });

  observer.observe(rowCount);
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
    nav: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    margin: 30,
    center: false,
    video: false
});

$(".slider-news-home").owlCarousel({
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
    dots: false,
    dotsEach: false,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    margin: 30,
    center: false,
    video: false
});

$(".slider-legal").owlCarousel({
    items: 3,
    responsive: {
        1200: { items:3 },
        992: { items: 3 },
        768: { items: 2 },
        480: { items: 1 },
        0: { items: 1 }
    },
    rewind: false,
    autoplay: false,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    smartSpeed: 5000,
    dots: false,
    dotsEach: false,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    margin: 30,
    center: false,
    video: false
});

$(".slider-library").owlCarousel({
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
    dots: false,
    dotsEach: false,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    margin: 30,
    center: false,
    video: false
});
$(".slider-subtract").owlCarousel({
    items: 2,
    responsive: {
        1200: { items: 2 },
        992: { items: 2 },
        768: { items: 2 },
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
    nav: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    margin: 30,
    center: false,
    video: false
});
$(".slider-cty").owlCarousel({
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
    nav: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    margin: 30,
    center: false,
    video: false
});

$(".slider-team").owlCarousel({
    items: 3,
    responsive: {
        1200: { items: 3 },
        992: { items: 3 },
        768: { items: 2 },
        480: { items: 2 },
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
    nav: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    margin: 30,
    center: false,
    video: false
});

$(".slider-park-text").owlCarousel({
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
    dots: false,
    dotsEach: false,
    loop: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    margin: 30,
    center: false,
    video: false
});






// slider text end image home
$(document).ready(function() {
    // --- KHAI BÁO BIẾN VÀ HÀM ---
    var sliderText = $('.slider-text');
    var sliderImage = $('.slider-image');

    // Hàm COUNTER để hiển thị "item X of Y"
    function counter(event) {
        // Đảm bảo event tồn tại để tránh lỗi
        if (!event.namespace) {
            return;
        }
        var items = event.item.count; // Tổng số item
        var item = event.item.index + 1; // Vị trí item hiện tại (bắt đầu từ 0)

        // Owl Carousel với loop=true có thể tạo ra các index ảo, cần điều chỉnh lại
        if (item > items) {
            item = item - items;
        }
        // Cập nhật nội dung HTML cho thẻ #counter
        $('#counter').html(item + " / " + items);
    }

    // Hàm UPDATE ACTIVE CLASS cho slider ảnh
    function updateActiveClass(event) {
      // Luôn xóa class 'custom-active' khỏi tất cả các item trước
      sliderImage.find('.owl-item').removeClass('custom-active'); 
      
      // Kiểm tra nếu chiều rộng màn hình nhỏ hơn hoặc bằng 1199px
      if (window.matchMedia('(max-width: 1199px)').matches) {
          // Màn hình <= 1199px (Mobile/Tablet)
          sliderImage.find('.owl-item.active').eq(0).addClass('custom-active');
      } else {
          // Màn hình > 1199px (PC)
          sliderImage.find('.owl-item.active').eq(1).addClass('custom-active');
      }
  }

    // --- KHỞI TẠO SLIDERS ---

    // Khởi tạo slider-text và gắn sự kiện counter
    sliderText.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: false,
        autoplay: false,
        onInitialized: counter, // Chạy counter khi khởi tạo xong
        onTranslated: counter  // Chạy counter mỗi khi chuyển slide
    });

    // Khởi tạo slider-image (slider ảnh) và gắn sự kiện active class
    sliderImage.owlCarousel({
        loop: true,
        autoplay: false, 
        margin: 20,
        nav: true,
        dots: false,
        responsive: {
            0: { items: 1 },
            600: { items: 3 },
            1000: { items: 5 }
        },
        onInitialized: updateActiveClass, // Chạy active class khi khởi tạo
        onTranslated: updateActiveClass   // Chạy active class khi chuyển slide
    });

    // --- LOGIC ĐỒNG BỘ 2 SLIDERS ---

    // Bắt sự kiện click vào nút "next" của slider-image
    sliderImage.on('click', '.owl-next', function() {
        sliderText.trigger('next.owl.carousel');
    });

    // Bắt sự kiện click vào nút "prev" của slider-image
    sliderImage.on('click', '.owl-prev', function() {
        sliderText.trigger('prev.owl.carousel');
    });

    // Đồng bộ khi kéo/thả slider-image
    sliderImage.on('changed.owl.carousel', function(event) {
        if (event.namespace && event.property.name === 'position') {
            var target = event.relatedTarget.relative(event.property.value, true);
            sliderText.trigger('to.owl.carousel', [target, 300, true]);
        }
    });
});

// slider brand and content

var brand = $(".slider-brand");
var brandText = $(".slider-brand-text");
brand.owlCarousel({ 
    items: 3,
    responsive: {
        1200: { items: 3 },
        992: { items: 3 },
        768: { items: 3 },
        480: { items: 2 },
        0: { items: 2 }
    }, 
    rewind: false,
    autoplay: false,
    autoplayHoverPause: true,  
    dots: false,
    loop: false,
    nav: false,
    margin:15
});
brandText.owlCarousel({
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
    dots: false,
    loop: false,
    nav: true,
    margin: 20
});
// Đồng bộ khi thay đổi slider-brand-text
brandText.on('changed.owl.carousel', function(event) {
    let index = event.item.index;
    brand.trigger('to.owl.carousel', [index, 300, true]);
    updateActiveCustom(index);
});
// Nếu muốn click vào slider-brand thì cũng đổi text
brand.on('click', '.owl-item', function() {
    let index = $(this).index();
    brandText.trigger('to.owl.carousel', [index, 300, true]);
    updateActiveCustom(index);
});
// Hàm gắn class active-custom
function updateActiveCustom(index) {
    $('.slider-brand .owl-item').removeClass('active-custom');
    $('.slider-brand .owl-item').eq(index).addClass('active-custom');
}
// Khởi tạo class active-custom lần đầu
updateActiveCustom(0);
// search land 
$(".filter-land").click(function(){
  $(".form-land").fadeToggle("slow");
});


// slider tem about

var sliderTeam = $(".slider-team");
var sliderText = $(".slide-text-team");
// Slider team
sliderTeam.owlCarousel({
    items: 3,
    responsive: {
        1200: { items: 3 },
        992: { items: 3 },
        768: { items: 2 },
        480: { items: 2 },
        0: { items: 1 }
    },
    loop: true,
    margin: 30,
    dots: true,
    nav: false
}).on('initialized.owl.carousel', function() {
    // Thêm class vào owl-item đầu tiên
    sliderTeam.find('.owl-item').removeClass('activer-custom');
    sliderTeam.find('.owl-item').eq(0).addClass('activer-custom');
});
// Slider text
sliderText.owlCarousel({
    items: 1,
    loop: false,
    dots: false,
    nav: false,
    animateOut: ['fadeIn'], // default: false
    animateIn: ['fadeIn'], // default: false
});
// Đồng bộ khi slider team thay đổi
sliderTeam.on('changed.owl.carousel', function(event) {
    var index = event.item.index - event.relatedTarget._clones.length / 2;
    var count = event.item.count;
    if (index < 0) index = count + index;
    index = index % count;

    sliderText.trigger('to.owl.carousel', [index, 300, true]);

    sliderTeam.find('.owl-item').removeClass('activer-custom');
    sliderTeam.find('.owl-item').eq(event.item.index).addClass('activer-custom');
});
// Đồng bộ khi slider text thay đổi (2 chiều)
sliderText.on('changed.owl.carousel', function(event) {
    sliderTeam.trigger('to.owl.carousel', [event.item.index, 300, true]);
});