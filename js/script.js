// This script adds an 'active' class to the navigation item that corresponds to the section currently in view on the page.
// When a navigation item is clicked, it removes the 'active' class from all other navigation items and adds it to the clicked item.
// Additionally, it adds the 'active' class to the first navigation item when the page is loaded and to the last navigation item when the user has scrolled to the bottom of the page.

// Add 'active' class to clicked navigation item
$('nav a').on('click', function() {
  $('nav a').removeClass('active');
  $(this).addClass('active');
});

// Add 'active' class to navigation item when the corresponding section is in view
$(window).on('scroll', function() {
  var scrollTop = $(this).scrollTop();
  var windowHeight = $(this).height();
  var documentHeight = $(document).height();
  
  if (scrollTop === 0) {
    $('nav a').removeClass('active');
    $('nav a:first').addClass('active');
  } else if (scrollTop + windowHeight === documentHeight) {
    $('nav a').removeClass('active');
    $('nav a:last').addClass('active');
  } else {
    $('section').each(function() {
      if(scrollTop >= $(this).offset().top - 100) {
        var id = $(this).attr('id');
        $('nav a').removeClass('active');
        $('nav a[href="#' + id + '"]').addClass('active');
      }
    });
  }
});

// Select first navigation item when website is loaded
$(document).ready(function() {
  $('nav a:first').addClass('active');
});
