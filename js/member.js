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