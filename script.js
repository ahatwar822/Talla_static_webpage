var menu = document.querySelector("#nav-prt2 i")
var full = document.querySelector("#full-scr-nav")

var flag = 0
menu.addEventListener("click", function () {

    if (flag == 0) {
        full.style.top = "0%"
        document.querySelector("#nav h2").style.color = "#222"
        document.querySelector("#nav h3").style.color = "#222"
        document.querySelector("#nav i").style.color = "#222"
        flag = 1
    } else {
        full.style.top = "-100%"
        document.querySelector("#nav h2").style.color = "#dadada"
        document.querySelector("#nav h3").style.color = "#dadada"
        document.querySelector("#nav i").style.color = "#dadada"
        flag = 0
    }

})

var tl = gsap.timeline()

tl.from("#page1 h1", {
    y: 50,
    duration: 0.5,
    opacity: 1,

})

    .from("#page1 h2", {
        y: 50,
        duration: 0.5,
        opacity: 0,
        delay: "-0.2"
    })

    .from("#page1 h3", {
        y: 50,
        duration: 0.5,
        opacity: 0,
        delay: "-0.2"
    })

gsap.to("#page2 img ", {

    scale :1,
    opacity:1,
    scrollTrigger:{
        trigger:'#page2 img',
        scroller:"body",
        start:"top 75%",
        end: "top 0%",
        scrub:3,
        opacity:0
    }
})

gsap.from("#page2 h1",{
    rotateX:-90, 
    opacity:0,
    scrollTrigger:{
        trigger:"#h11",
        scroller:"body",   
        start:"top 70%",
        end: "top 60%",
        scrub:3,
        opacity:1
    }
})