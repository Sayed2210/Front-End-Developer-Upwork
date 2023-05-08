$(document).ready(function(){
  $('.owl-one').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  })
  $('.owl-two').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
  })
});
//select bullets
let bullets = Array.from(document.querySelectorAll(".bullets li"));
//loop on all bulets
bullets.forEach(bullet => {
    //add function to bullets
    bullet.addEventListener("click",(e)=>{
        bullets.forEach((e)=>{
            e.classList.remove('active');
        })
        e.currentTarget.classList.add("active")
        document.querySelector(e.currentTarget.dataset.section).scrollIntoView(
            {
                behavier: "smooth"
            }
        )
    })
})