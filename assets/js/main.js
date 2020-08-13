/**
 * Template Name: Vesperr - v2.1.0 Template URL:
 * https://bootstrapmade.com/vesperr-free-bootstrap-template/ Author:
 * BootstrapMade.com License: https://bootstrapmade.com/license/
 */
 var filesList = [];
var testFileName = null;
var searchKeywords = ['achievement','lead', 'leadership', 'manage', 'motivate',
						'employee', 'requirement', 'cost', 'data', 'database', 'analytics', 'design',
						'problem-solving', 'attributes', 'automated', 'unit', 'testing', 'junit',
						'debugging', 'logs', 'error', 'version', 'control', 'git', 'distributed', 'push',
						'pull', 'checkout', 'commit', 'release', 'repository', 'history'];


function runScript(e) {
    // See notes about 'which' and 'key'
    if (e.keyCode == 13) {
        search();
        return false;
    }
}


function addToFileList()
{
	var searchString = window.location.search.substring(1);
	var splitParts = searchString.split('?');
	var searchKeyword = splitParts[0];
	var files = splitParts[1].split(",");


	for(var i =0 ;i< files.length; i++){
		var fileName = files[i]+".html";
		var articleName = files[i].replace("-"," ");
		var titleCaseName = titleCase(articleName);

	document.getElementById("searchResultDiv").children[0].innerHTML += "<li><a href="+fileName+">"+titleCaseName+"</a></li>";
	}

	document.getElementById('searchKeyword').innerHTML = searchKeyword;

}

function search(){
    var searchText = document.getElementById("searchText").value;
    console.log(searchKeywords.indexOf(searchText));

    if(searchKeywords.indexOf(searchText) <= -1){
    	    location.href = "search-failed.html";
    }
    else{
    	if(searchText == 'analysis' ||  searchText == 'lead' || searchText == 'object' || searchText == 'change' || searchText == 'knowledge' || searchText == 'leadership' || searchText == 'manage' || searchText == 'motivate' || searchText == 'employee'){
        filesList.push("cost-management");
        filesList.push("version-control");
        filesList.push("data-modelling");
        filesList.push("debugging");
        filesList.push("leadership");
        filesList.push("reverse-engineering");
        filesList.push("unit-testing");
        filesList.push("requirement-analysis");

      }
      else if(searchText == 'requirement'){
        filesList.push("requirement-analysis");
      }
      else if(searchText == 'achievement'){
        filesList.push("cost-management");
      }
      else if(searchText == 'cost' || searchText == 'price' || searchText == 'estimation' || searchText == 'value' ){
        filesList.push("cost-management");

      }
      else if(searchText == 'data' || searchText == 'database' || searchText == 'modelling' || searchText == 'value' || searchText == 'relational' || searchText == 'query' || searchText == 'sql' ){
        filesList.push("data-modelling");

      }
      else if(searchText == 'debug' || searchText == 'API' || searchText == 'code' || searchText == 'test' || searchText == 'testing' || searchText == 'loc' ) {
        filesList.push("debugging");
        filesList.push("unit-testing");
      }
      else if(searchText == 'reverse' || searchText == 'engineering' || searchText == 'API' || searchText == 'testing' || searchText == 'loc' ) {
        filesList.push("debugging");
        filesList.push("unit-testing");
      }
      else if(searchText == 'release' || searchText == 'merge' || searchText == 'trunk' || searchText == 'branch' || searchText == 'repository' || searchText == 'distributed' || searchText == 'version' || searchText == 'git' || searchText == 'control' || searchText == 'push' || searchText == 'pull' ) {
        filesList.push("version-control");
      }



    location.href = "search-results.html?"+searchText+"?"+filesList;
    console.log("while sending");
    console.log(filesList);
	}

}

function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   // Directly return the joined string
   return splitStr.join(' ');
}

!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 15;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 2
      }
    }
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);
