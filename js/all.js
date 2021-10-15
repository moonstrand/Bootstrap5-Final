$(document).ready(function () {
    $('.banner-url').on('click', function () {
        $(this).addClass('active').parent('.bannerbox').parent('.col').siblings('.col').find('.banner-url').removeClass('active');
    });

    $('.far.fa-heart').on('click', function () {
        $(this).toggleClass('fill');
    });

    $('.list-group-item').on('click', function () {
        $(this).addClass('active').siblings('.list-group-item').removeClass('active');
    });
});