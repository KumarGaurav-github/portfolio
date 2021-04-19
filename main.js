//Movement Animation to happen
var card = document.querySelectorAll(".card3d");
var container = document.querySelectorAll(".container_");
//Items
var title = document.querySelectorAll(".title");
var sneaker = document.querySelector(".image3d ");
var sneaker2 = document.querySelector(".image3d1 ");
var sneaker3 = document.querySelector(".image3d2 ");
var sneaker4 = document.querySelector(".image3d3 ");
var sneaker5 = document.querySelector(".image3d4 ");
var sneaker6 = document.querySelector(".image3d5 ");
var purchase = document.querySelectorAll(".purchase");
var description = document.querySelectorAll(".info_ .h33d");
var sizes = document.querySelectorAll(".sizes");

//Moving Animation Event

container[0].addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 180;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 180;
  card[0].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container[1].addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 180;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 180;
  card[1].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container[2].addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 180;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 180;
  card[2].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container[3].addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 180;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 180;
  card[3].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container[4].addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 180;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 180;
  card[4].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container[5].addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 180;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 180;
  card[5].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container[0].addEventListener("mouseenter", (e) => {
  card[0].style.transition = "none";
  //Popout
  title[0].style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(100px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes[0].style.transform = "translateZ(100px)";
  purchase[0].style.transform = "translateZ(75px)";
});

container[1].addEventListener("mouseenter", (e) => {
  card[1].style.transition = "none";
  //Popout
  title[1].style.transform = "translateZ(150px)";
  sneaker2.style.transform = "translateZ(150px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes[1].style.transform = "translateZ(100px)";
  purchase[1].style.transform = "translateZ(75px)";
});

container[2].addEventListener("mouseenter", (e) => {
  card[2].style.transition = "none";
  //Popout
  title[2].style.transform = "translateZ(150px)";
  sneaker3.style.transform = "translateZ(150px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes[2].style.transform = "translateZ(100px)";
  purchase[2].style.transform = "translateZ(75px)";
});

container[3].addEventListener("mouseenter", (e) => {
  card[3].style.transition = "none";
  //Popout
  title[3].style.transform = "translateZ(150px)";
  sneaker4.style.transform = "translateZ(150px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes[3].style.transform = "translateZ(100px)";
  purchase[3].style.transform = "translateZ(75px)";
});

container[4].addEventListener("mouseenter", (e) => {
  card[4].style.transition = "none";
  //Popout
  title[4].style.transform = "translateZ(150px)";
  sneaker5.style.transform = "translateZ(150px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes[4].style.transform = "translateZ(100px)";
  purchase[4].style.transform = "translateZ(75px)";
});

container[5].addEventListener("mouseenter", (e) => {
  card[5].style.transition = "none";
  //Popout
  title[5].style.transform = "translateZ(150px)";
  sneaker6.style.transform = "translateZ(150px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes[5].style.transform = "translateZ(100px)";
  purchase[5].style.transform = "translateZ(75px)";
});

//Animate Out
container[0].addEventListener("mouseleave", (e) => {
  card[0].style.transition = "all 0.5s ease";
  card[0].style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title[0].style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description[0].style.transform = "translateZ(0px)";
  sizes[0].style.transform = "translateZ(0px)";
  purchase[0].style.transform = "translateZ(0px)";
});

container[1].addEventListener("mouseleave", (e) => {
  card[1].style.transition = "all 0.5s ease";
  card[1].style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title[1].style.transform = "translateZ(0px)";
  sneaker2.style.transform = "translateZ(0px) rotateZ(0deg)";
  description[1].style.transform = "translateZ(0px)";
  sizes[1].style.transform = "translateZ(0px)";
  purchase[1].style.transform = "translateZ(0px)";
});

container[2].addEventListener("mouseleave", (e) => {
  card[2].style.transition = "all 0.5s ease";
  card[2].style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title[2].style.transform = "translateZ(0px)";
  sneaker3.style.transform = "translateZ(0px) rotateZ(0deg)";
  description[2].style.transform = "translateZ(0px)";
  sizes[2].style.transform = "translateZ(0px)";
  purchase[2].style.transform = "translateZ(0px)";
});

container[3].addEventListener("mouseleave", (e) => {
  card[3].style.transition = "all 0.5s ease";
  card[3].style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title[3].style.transform = "translateZ(0px)";
  sneaker4.style.transform = "translateZ(0px) rotateZ(0deg)";
  description[3].style.transform = "translateZ(0px)";
  sizes[3].style.transform = "translateZ(0px)";
  purchase[3].style.transform = "translateZ(0px)";
});

container[4].addEventListener("mouseleave", (e) => {
  card[4].style.transition = "all 0.5s ease";
  card[4].style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title[4].style.transform = "translateZ(0px)";
  sneaker5.style.transform = "translateZ(0px) rotateZ(0deg)";
  description[4].style.transform = "translateZ(0px)";
  sizes[4].style.transform = "translateZ(0px)";
  purchase[4].style.transform = "translateZ(0px)";
});

container[5].addEventListener("mouseleave", (e) => {
  card[5].style.transition = "all 0.5s ease";
  card[5].style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title[5].style.transform = "translateZ(0px)";
  sneaker6.style.transform = "translateZ(0px) rotateZ(0deg)";
  description[5].style.transform = "translateZ(0px)";
  sizes[5].style.transform = "translateZ(0px)";
  purchase[5].style.transform = "translateZ(0px)";
});
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()