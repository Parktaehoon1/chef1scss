$(document).ready(function () {
    let header = $('.header');
    new Waypoint({
        element:$('.about-info'),
        handler: function(direction){
            if(direction == 'down'){
                header.css('top', -150);
                header.addClass('hide');
            } else if (direction == 'up'){
                header.css('top', 0);
                header.removeClass('hide');
            }
        },
        offset: '20%'
    })

    let scY = $(window).scrollTop();
    $(window).scroll(function(){
        let tempY = $(window).scrollTop();

        let temp = header.hasClass('hide');
        if(temp == true){
            if(tempY - scY > 0){
                header.css('top', -150);
            } else {
                header.css('top', 0);
            }
        }
        scY = tempY;
    })

    // 모달창
    let modalWrap = $('.modal-wrap');
    let modalClose = $('.modal-close');


    modalClose.click(function () {
        modalWrap.stop().fadeOut(500)
        // 추가기능 : 스크롤바 살리기
        // $('html').css('overflow', 'auto');
    });
    let modalMain = $('.modal-main')
    //내용 배경 클릭
    modalMain.click(function (event) {
        // 클릭 정보 전달 막기
        event.stopPropagation();
    });
    //전체 배경 클릭
    modalWrap.click(function () {
        modalWrap.stop().fadeOut(500);
    });









    let headerOpen = $('.header-btn-open');
    let headerClose = $('.header-btn-close');
    let siteMap = $('.sitemap');
    let siteMapList = $('.sitemap-depth1');
    let mainHeader = $('.main-header');
    let mainHeaderOpen = $('main-header-open');

    headerOpen.click(function () {
        headerOpen.addClass('hd-btn-open');
        headerClose.addClass('hd-btn-close');
        mainHeader.addClass('main-header-open');
    })
    headerClose.click(function () {
        headerOpen.removeClass('hd-btn-open');
        headerClose.removeClass('hd-btn-close');
        mainHeader.removeClass('main-header-open');
    })



    siteMap.click(function (event) {
        event.preventDefault();
        siteMapList.stop().slideToggle(200);
    })


    if ($('.slide-section').length > 0) {
        var SlideSection = new Swiper(".sw-service", {
            observer: true,
            observeParents: true,
            watchOverflow: true,
            slidesPerView: 1,
            speed: 600,
            navigation: {
                prevEl: ".sw-service-prev",
                nextEl: ".sw-service-next"
            },
            // on: {
            //     slideChangeTransitionStart: function () {
            //         $('body').addClass('is-StartSlide');
            //     }
            // }
        });
    }


    let fn = (function () {
        var controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: ".productbanner"
            }
        });

        new ScrollMagic
            .Scene({
                triggerElement: ".productimg",
                duration: "100%"
            })
            .setTween(".productimg", {
                y: "30%",
                ease: Linear.easeNone
            })
            .addTo(controller);
    }())


});


window.onload = function () {
    AOS.init();



    let swiperButton = document.querySelectorAll('.sw-service-control > button')
    let swiperButtonPrev = document.querySelector('.sw-service-prev');
    let swiperButtonNext = document.querySelector('.sw-service-next');
    console.log(swiperButton);
    console.log(swiperButtonPrev);
    console.log(swiperButtonNext);


}