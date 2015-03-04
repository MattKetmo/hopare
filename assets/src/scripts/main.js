var $window = $(window);
var $navbar = $('.navbar');
var $homeHero = $('#home-hero');

// Navbar autohiding
$navbar.autoHidingNavbar();

// Transparent navbar on homepage
function checkNavbarTransparent() {
  var heroBottom = $homeHero.offset().top + $homeHero.outerHeight();
  var windowTop = $window.scrollTop();// + $window.height();

  if (windowTop > heroBottom - 60) {
    $navbar.removeClass('navbar-transparent');
  } else {
    $navbar.addClass('navbar-transparent');
  }

}

if ($homeHero) {
  checkNavbarTransparent();
  $window.scroll($.throttle(100, checkNavbarTransparent));
}
