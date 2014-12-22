// accordion
(function ($) {
  var allPanels = $('.accordion > dd').hide();

  $('.accordion > dt > a').click(function () {
    $(this).parent().toggleClass('open');
    allPanels.slideUp();
    $('.arrow.arrow_top').removeClass('arrow_top')
      .addClass('arrow_bottom');

    if ($(this).parent().hasClass('open')) {
      $(this).parent().find('.arrow.arrow_bottom')
        .addClass('arrow_top')
        .removeClass('arrow_bottom');
      $(this).parent().next().slideDown();
    }
    else {
      $(this).parent().find('.arrow_top')
        .removeClass('arrow_top')
        .addClass('arrow_bottom');
      allPanels.slideUp();
    }
    return false;
  });
}(jQuery));