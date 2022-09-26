
$(function(){

    $(".brand-slider").slick({
        slidesToShow:6,
        arrows:false,
        // autoplay:true,

        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            }
          ]

    })
    
    $('.counter').counterUp();

    $(".testi-slider").slick({
        prevArrow:'<i class="fa-solid fa-arrow-left prev"></i>',
        nextArrow:'<i class="fa-solid fa-arrow-right next"></i>',
    })

    $(window).scroll(function(){
        console.log($(window).scrollTop())
        
        if($(window).scrollTop() > 300){
            $(".menu").addClass("nav-scroll")
        }else{
            $(".menu").removeClass("nav-scroll")
        }


        if($(window).scrollTop() > 600){
            $(".top-btn").fadeIn()
        }else{
            $(".top-btn").fadeOut()
        }

    })

    $(".top-btn").click(function(){
        $("html,body").animate({
            scrollTop:0,
        },1000)
    })

})