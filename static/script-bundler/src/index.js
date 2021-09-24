import 'jquery';
import 'bootstrap';

$(document).ready(function () {
    $(function () {
        $('.navbar-nav a.nav-link, a.link-btn').click(function () {
            var target = $(this).attr('href');
            let tagOffset = 0;
            for (; tagOffset <= target.length; tagOffset++) {
                if (target.charAt(tagOffset) == "#") {
                    break;
                }
            }
            target = target.slice(tagOffset, target.length);
            if ($(this).length) {
                $('.navbar-nav a.nav-link').removeClass('active');
                $(this).addClass('active');
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(target).offset().top - 55
                }, 500);
                if (window.innerWidth < 776) {
                    $("#mobil-nav").collapse('hide');
                    $('.animated-icon1').removeClass('open');
                    $('.animated-icon2').removeClass('open');
                    $('.animated-icon3').removeClass('open');
                }
                return false;
            }
        });
    });

    if (location.hash != "" && $(location.hash).length > 0) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(location.hash).offset().top - 55
        }, 500);
    }
    history.pushState(null, null, ' ');

    $(window).scroll(function () {
        let sectionsList = $('.content-section');
        let diff = (window.innerHeight / 2);
        if (window.innerWidth < 776) {
            diff = 100;
        }
        for (let i = sectionsList.length - 1; i >= 0; i--) {
            if ($(sectionsList[i]).position().top - diff < $(document).scrollTop()) {

                let navLink = $("#nav-" + $(sectionsList[i]).attr("id"));
                $("#mobil-nav a.active").removeClass("active");
                $(navLink).addClass("active");
                break;
            }
        }
    });

    $('.first-button').on('click', function () {
        $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
        $('.animated-icon2').toggleClass('open');
        $('.animated-icon3').toggleClass('open');
    });
    $('.third-button').on('click', function () {
        $('.animated-icon3').toggleClass('open');
    });
});
