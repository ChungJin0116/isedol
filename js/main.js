gsap.registerPlugin(ScrollTrigger);
// 비디오 스크롤 영역
gsap.to(".video_value", {
    scrollTrigger: {
        trigger: ".video_value",
        // markers: true,
        start: "top top",
        endTrigger : ".info_value_list",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
    }
});
gsap.to(".cnt_pin", {
    scrollTrigger: {
        trigger: ".info_text",
        // markers: true,
        start: "top 160px",
        endTrigger : ".info_value_list li:last-child",
        end: "bottom 220px",
        scrub: 1,
        pin: true,
    }
});

gsap.to(".video_value", {
    scrollTrigger: {
        trigger: ".info_value_list .respons",
        // markers: true,
        start: "top 250px",
        end: "bottom bottom",
        onUpdate: function(self){
            $("#movie_respons").fadeIn(100);
            $("#movie_value").fadeOut(200);
            $("#movie_trendy").fadeOut(200);
        },
    }
});
gsap.to(".video_value", {
    scrollTrigger: {
        trigger: ".info_value_list .value",
        // markers: true,
        start: "top 250px",
        end: "bottom bottom",
        onUpdate: function(self){
            $("#movie_respons").fadeOut(200);
            $("#movie_value").fadeIn(100);
            $("#movie_trendy").fadeOut(200);
        },
    }
});
gsap.to(".video_value", {
    scrollTrigger: {
        trigger: ".info_value_list .trendy",
        // markers: true,
        start: "top 250px",
        end: "bottom bottom",
        onUpdate: function(self){
            $("#movie_respons").fadeOut(200);
            $("#movie_value").fadeOut(200);
            $("#movie_trendy").fadeIn(100);
        },
    }
});

// 포트폴리오 슬라이드
var visualSlide = new Swiper(".portfolio_slide", {
    slidesPerView : 1,
    loop: true,
    pagination: {
        el: ".portfolio_slide .port_paging",
        clickable: true,
    },
});

// 추천영상 슬라이드
var visualSlide = new Swiper(".recommend_slide", {
    spaceBetween: 15,
    slidesPerView : 2,
    loop: true,
});

// 클라이언트
function cardFlip() {
    if( $(".member_list").length > 0  ) { 
        TweenMax.set($(".card .back"), {rotationY:-180});

        $.each($(".member_list .card"), function(i,element) {
            var frontCard = $(this).children(".front"),
                backCard = $(this).children(".back"),
                tl = new TimelineMax({paused:true});
    
            tl
                .to(frontCard, .5, {rotationY: 180})
                .to(backCard, .5, {rotationY: 0},0);

            element.animation = tl;

            $(this).hover(function(e) {
                backCard.addClass("show");
                $(this).siblings(".tolltip").addClass("over");
                tl.play();
            }, function() {
                $(this).siblings(".tolltip").removeClass("over");
                tl.reverse();
            });
        });
    }
}

$(document).ready(function () {
    cardFlip();
    AOS.init({
        easing: "ease",
        duration: 1000,
        offset: 200,
        delay:150
    });
});