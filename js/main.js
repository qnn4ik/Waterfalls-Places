$(document).ready(function() {
    console.log('doc is ready!');
    new WOW().init();

    var link = $('.btn-open'),
        linkBefore = $('.btn-open:before'),
        parent = $('.main header'),
        overlay = $('.main .overlay'),
        menu = $('.main-nav');


        function openMenu() {
            parent.toggleClass('btn-active');
            overlay.toggleClass('overlay-active');
            if (overlay.hasClass('overlay-active')) {
                $('body').css('overflow', 'hidden');
            } else {
                $('body').css('overflow', 'visible');
            }
            menu.toggleClass('menu-active');
        }
        function closeMenu() {
            parent.toggleClass('btn-active');
            overlay.toggleClass('overlay-active');
            if (overlay.hasClass('overlay-active')) {
                $('body').css('overflow', 'hidden');
            } else {
                $('body').css('overflow', 'visible');
            }
            menu.toggleClass('menu-active');
        }

    link.on('click', openMenu);

    $('.main-nav ul li a').on('click', closeMenu);
});
