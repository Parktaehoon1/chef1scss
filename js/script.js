$(document).ready(function () {

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
        // $('body').css('overflow-y', 'hidden');
    })
    headerClose.click(function () {
        headerOpen.removeClass('hd-btn-open');
        headerClose.removeClass('hd-btn-close');
        mainHeader.removeClass('main-header-open');
        // $('body').css('overflow-y', 'auto');
    })

    // 이 구문이 왜 안되는지?
    // if(mainHeader.hasClass('main-header-open')){
    //     $('body').attr('overflow-y', 'hidden');
    // } else{
    //     $('body').attr('overflow-y', 'auto');
    // }


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
                nextEl: ".sw-service-next",
                prevEl: ".sw-service-prev",
            },
            on: {
                slideChangeTransitionStart: function () {
                    $('body').addClass('is-StartSlide');
                }
            }
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
            // .addIndicators()  이거하면 옆에 트리거나옴
            .addTo(controller);
    }())


  });


window.onload = function () {
    AOS.init();


    //     $("#wrapper").dotdotdot({
    //         wrapper  : 'div',  /*  콘텐트를 감쌀 요소. */
    //         ellipsis: '... ',  /*  말줄임표를 뭘로 할지 */
    //         wrap  : 'word',    /*  자를 단위. 다음 옵션 중 하나 선택: 'word'/'letter'/'children' */
    //         after  : null,     /*  자르고 나서도 유지시킬 요소를 jQuery 선택자로 적는다. */
    //         watch  : false,    /*  윈도우가 리사이즈될 때 업데이트할 건지: true/'window' */
    //         height  : null,     /*  선택. max-height를 지정한다. 만약 null이면 알아서 잰다. */
    //         tolerance: 0       /*  글이 넘치면 이만큼쯤 height를 늘린다 */
    //       });

    // let mainHeader = document.querySelector('.main-header');
    // console.log("mainheader",mainHeader)
    // let body = document.querySelector('body');
    // console.log("body",body)
    // let HeaderBtn = document.querySelector('.header-btn-open')
    // console.log("headerbtn",HeaderBtn)
    // let HeaderCloseBtn = document.querySelector('.header-btn-close')
    // console.log("headerClosebtn",HeaderCloseBtn)

    // HeaderBtn.addEventListener('click', function(){
    //     let temp = mainHeader.hasAttribute('main-header-open');
    //     console.log('이게뭘까',temp)
    //     if(mainHeader.hasAttribute('main-header-open')){
    //         body.style.overflowY = "hidden"
    //     } else {
    //         body.style.overflowY = "auto"
    //     }
    // });

    // HeaderCloseBtn.addEventListener('click', function(){
    //     if(mainHeader.hasAttribute('main-header-open')){
    //         body.style.overflowY = "auto"
    //     }
    // });
    let swiperButton = document.querySelectorAll('.sw-service-control > button')
    let swiperButtonPrev = document.querySelector('.sw-service-prev');
    let swiperButtonNext = document.querySelector('.sw-service-next');
    console.log(swiperButton);
    console.log(swiperButtonPrev);
    console.log(swiperButtonNext);

    let header = document.querySelector('.header')
    addEventListener("mousewheel", e => {
        const direction = e.deltaY > 0 ? "Scroll Down" : "Scroll Up";
        console.log(e.deltaY)
        if(direction == "Scroll Up"){
            header.classList.remove('header-open')
        } else if(direction == "Scroll Down"){
            header.classList.add('header-open')
        }
        // 방향과 현 스크롤 위치
        // console.log(direction, window.scrollY);
      });

}


