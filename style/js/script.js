$(document).ready(function () {

  handleMenuScroll();


  setupToggleExperienceButtons();
});

function handleMenuScroll() {
  $(window).on('scroll', function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
  });
}


function setupToggleExperienceButtons() {

  $(document).on('click', '.btn-toggle-experience', function () {
    const more = $(this).closest('.experience').find('.experience-more');
    more.slideToggle(300);
    $(this).text(more.is(':visible') ? 'Voir moins' : 'Voir plus');
  });
}
