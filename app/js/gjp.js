
//Feedback section slaider
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

//Scroll up function
const toTop = document.querySelector("#toTop");

toTop.addEventListener("click", function(){
    $("html, body").animate({scrollTop: 0}, "slow");
});

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
});


