//Navbar scroll
let nav = document.querySelector(".navbar");
window.onscroll = function() {
    if(document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}

//nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach((function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
}))

//Swiper Slider
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    autoplay: {
        delay: 3500,
    },
})

//counter Design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){{
        let obj = document.getElementById(id);
        current = start;
        range = end - start;
        increment = end > start ? 1: -1;
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current === end){
                clearInterval(timer);
            }
        }, step)

    }}
    counter("count1", 0, 2000, 3000);
    counter("count2", 0, 5000, 2500);
    counter("count3", 0, 7000, 3000);
    counter("count4", 0, 7234, 3000);

})

//Our Partner
var swiper = new Swiper('.our-partner', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        "991": {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        "767": {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        "320": {
            slidesPerView: 2,
            spaceBetween: 8
        }
    }
})

//collapse in rooms

function handleAnchor(){
    let targetAnchor = document.getElementById("card-more-less");
    let targetmore = document.getElementById("more");
    let targetless = document.getElementById("less");

    if(targetAnchor.getAttribute("aria-expanded")){
        targetmore.classList.toggle("d-none")
        targetless.classList.toggle("d-inline-block")
    }
}
// let targetbtn = document.getElementById("book-btn");
// targetbtn.addEventListener("click", )
// document.getElementById("book-btn").onclick = helpit;
// function helpit(){
//     let targetrooms = document.getElementById("rooms");
//     let targetpersonal = document.getElementById("personal-info");
//     targetpersonal.classList.add("d-block");
// }
function handleit(){
    let targetpersonal = document.getElementById("personal-info");
    let targetrooms = document.getElementById("rooms");
    targetpersonal.classList.add("d-block")
    targetrooms.classList.add("d-none")
}



