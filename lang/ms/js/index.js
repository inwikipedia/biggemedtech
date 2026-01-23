$(function () {
  // Product pagination variables
  let currentPage = 1;
  const productsPerPage = 10;

  var $slider = $(".hero-slider");
  var $track = $(".hero-track");
  var $slides = $(".hero-slide");
  var $dots = $(".hero-dot");
  var $prev = $(".hero-prev");
  var $next = $(".hero-next");

  var slider = $slider.get(0);
  var track = $track.get(0);
  var slides = $slides.toArray();
  var dots = $dots.toArray();
  var currentIndex = 0;
  var autoPlayDelay = 6000;
  var timerId;
  var isPointerDown = false;
  var startX = 0;
  var slideWidth = 0;

  function updateSlideWidth() {
    if (!slider) return;
    slideWidth = $slider.outerWidth() || 1;
  }

  function applyTransform(offsetPx) {
    if (!track) return;
    $track.css("transform", "translateX(" + offsetPx + "px)");
  }

  function showSlide(index) {
    if (!slides.length) return;
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    updateSlideWidth();

    $slides.each(function (i, el) {
      if (i === index) {
        $(el).addClass("active");
      } else {
        $(el).removeClass("active");
      }
    });

    $dots.each(function (i, el) {
      if (i === index) {
        $(el).addClass("active");
      } else {
        $(el).removeClass("active");
      }
    });

    currentIndex = index;
    applyTransform(-index * slideWidth);
  }

  function goNext() {
    showSlide(currentIndex + 1);
  }

  function goPrev() {
    showSlide(currentIndex - 1);
  }

  function resetTimer() {
    if (timerId) {
      clearInterval(timerId);
    }
    timerId = setInterval(goNext, autoPlayDelay);
  }

  if ($prev.length && $next.length && slides.length > 1) {
    $prev.on("click", function () {
      goPrev();
      resetTimer();
    });
    $next.on("click", function () {
      goNext();
      resetTimer();
    });
  }

  $dots.each(function (index, el) {
    $(el).on("click", function () {
      showSlide(index);
      resetTimer();
    });
  });

  function pointerDown(clientX) {
    if (!slider || !track || slides.length <= 1) return;
    isPointerDown = true;
    startX = clientX;
    $slider.addClass("dragging");
    if (timerId) {
      clearInterval(timerId);
    }
    updateSlideWidth();
  }

  function pointerMove(clientX) {
    if (!isPointerDown || !slider || !track) return;
    var deltaX = clientX - startX;
    applyTransform(-currentIndex * slideWidth + deltaX);
    // Add smooth scrolling optimization
    requestAnimationFrame(() => {
      applyTransform(-currentIndex * slideWidth + deltaX);
    });
  }

  function pointerUp(clientX) {
    if (!isPointerDown || !slider || !track) return;
    isPointerDown = false;
    $slider.removeClass("dragging");
    var deltaX = clientX - startX;
    var threshold = slideWidth * 0.15;
    if (deltaX > threshold) {
      goPrev();
    } else if (deltaX < -threshold) {
      goNext();
    } else {
      showSlide(currentIndex);
    }
    resetTimer();
  }

  if ($slider.length && $track.length && slides.length > 1) {
    $slider.on("mousedown", function (e) {
      pointerDown(e.clientX);
    });

    $slider.on("mousemove", function (e) {
      if (isPointerDown) {
        pointerMove(e.clientX);
      }
    });

    $slider.on("mouseup", function (e) {
      if (isPointerDown) {
        pointerUp(e.clientX);
      }
    });

    $slider.on("mouseleave", function (e) {
      if (isPointerDown) {
        pointerUp(e.clientX || startX);
      }
    });

    $slider.on("touchstart", function (e) {
      var touch =
        e.originalEvent.touches &&
        e.originalEvent.touches[0];
      if (touch) {
        pointerDown(touch.clientX);
      }
    });

    $slider.on("touchmove", function (e) {
      var touch =
        e.originalEvent.touches &&
        e.originalEvent.touches[0];
      if (touch) {
        pointerMove(touch.clientX);
      }
    });

    $slider.on("touchend", function (e) {
      var touch =
        e.originalEvent.changedTouches &&
        e.originalEvent.changedTouches[0];
      if (touch) {
        pointerUp(touch.clientX);
      }
    });
  }

  $(window).on("resize", function () {
    updateSlideWidth();
    showSlide(currentIndex);
    // Force repaint for smooth resize
    $track.get(0).style.transform += "";
  });

  if (slides.length > 0) {
    showSlide(0);
  }
  if (slides.length > 1) {
    resetTimer();
  }


  var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
  (function () {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src =
      "https://embed.tawk.to/695f38086cc1cc198205ad13/1jedv5p7d";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  })();

});
