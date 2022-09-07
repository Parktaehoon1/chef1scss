$(document).ready(function () {
    let header = $('.header');
    new Waypoint({
        element: $('.about-info'),
        handler: function (direction) {
            if (direction == 'down') {
                header.css('top', -150);
                header.addClass('hide');
            } else if (direction == 'up') {
                header.css('top', 0);
                header.removeClass('hide');
            }
        },
        offset: '20%'
    })
    let scY = $(window).scrollTop(); // 스크린전체에서의 Y축의 값
    console.log("scY", scY)
    $(window).scroll(function () {
        let tempY = $(window).scrollTop(); // 스크롤을 내렸을떄 나타나는 Y축의 값
        console.log("tempY", tempY)

        let temp = header.hasClass('hide');
        /* 위 waypoint에서 스크롤을 내렸을때 hide라는 addClass를 주었기때문에  그 클래스 값으로 
        비교하여서 header를 올릴지 내릴지 정함*/
        if (temp == true) {
            if (tempY - scY > 0) { // 양수가 나오면 스크롤이 아래로 떨어진 의미.
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

}