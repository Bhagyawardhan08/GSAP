// gsap.from("#page1 .box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
    
// })

gsap.to("#page2 h1",{
    // scale:0,
    // opacity:0, 
    // duration:1,
    // rotate:720,
    transform:"translateX(-150%)",
    scrollTrigger:{

        trigger:"#page2 ",
        scroller:"body",
        start:"top 0%",
        end:"top -150%",
        scrub:5,
        pin:true
    }
    
})