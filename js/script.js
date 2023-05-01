// Add 'active' class to clicked navigation item
$('nav a').on('click', function() {
    $('nav a').removeClass('active');
    $(this).addClass('active');
  });
  
  // Add 'active' class to navigation item when the corresponding section is in view
  $(window).on('scroll', function() {
    $('section').each(function() {
      if($(window).scrollTop() >= $(this).offset().top - 100) {
        var id = $(this).attr('id');
        $('nav a').removeClass('active');
        $('nav a[href="#' + id + '"]').addClass('active');
      }
    });
  });