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
const items = document.querySelectorAll('#menu-main>li');
  items.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      item.classList.add('hovered');

      // phần tử trước đó
      if (index > 0) {
        items[index - 1].classList.add('prev-hovered');
      }

      // phần tử sau đó
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

//
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
        $('#counter').html("item " + item + " of " + items);
    }

    // Hàm UPDATE ACTIVE CLASS cho slider ảnh
    function updateActiveClass(event) {
        sliderImage.find('.owl-item').removeClass('custom-active');
        sliderImage.find('.owl-item.active').eq(1).addClass('custom-active');
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