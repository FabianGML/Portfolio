/*============SHOW MENU==================*/

const navToggle = document.querySelector('.nav_toggle'),
nav = document.querySelector('.nav_list')

/* Validate if constant exists */

if(navToggle){
    navToggle.addEventListener('click', () =>{
        nav.classList.add('show-menu')
    })
}


/*============GSAP Hero section==================*/
gsap.registerPlugin(ScrollTrigger);

tl = gsap.timeline();

tl.from(".name", {
    duration: .5,
    opacity: 0,
    x: 200,
});

tl.to(".dev" , {
    duration: 1.3,
    text: "FullStack Web Developer"
})

tl.from(".pc_hero", {
    duration: .7,
    scale: 0.2,
    opacity: 0
});

tl.from(".php_hero", {
    duration: .5,
    scale: 0.2,
    opacity: 0
});

tl.from(".mysql_hero", {
    duration: .5,
    scale: 0.2,
    opacity: 0.0
});

tl.from(".html_hero", {
    duration: .5,
    x : 100,
    scale: 0.2,
    opacity: 0,
    ease: "bounce"
});

gsap.from(".css_hero", {
    duration: .5,
    x : -100,
    scale: 0.2,
    opacity: 0,
    delay: 3.5,
    ease: "bounce"
});

gsap.from(".js_hero", {
    duration: 1.5,
    x : 100,
    y: 90,
    scale: 0.2,
    opacity: 0,
    delay: 4,
    ease: "expo"
});
gsap.from(".laravel_hero", {
    duration: 1,
    x : 20,
    y: 100,
    scale: 0.2,
    opacity: 0,
    delay: 4,
    ease: "expo"
});
gsap.from(".git_hero", {
    duration: .5,
    x : -100,
    y: 100,
    scale: 0.2,
    opacity: 0,
    delay: 4,
    ease: "expo"
});
gsap.from(".react_hero", {
    duration: 1.5,
    x : 80,
    y: -20,
    scale: 0.2,
    opacity: 0,
    delay: 4,
    ease: "expo"
});
gsap.from(".pyt_hero", {
    duration: 1,
    scale: 0.2,
    opacity: 0,
    delay: 4,
    ease: "expo"
});
gsap.from(".ang_hero", {
    duration: 1.5,
    x : -100,
    y: -10,
    scale: 0.2,
    opacity: 0,
    delay: 4,
    ease: "expo"
});

tl.from(".menu_contact" , {
    duration: 1,
    x: -200,
    opacity: 0,
})

gsap.from(".nav_toggle" , {
    duration: 1,
    x: 200,
    opacity: 0,
    delay: 3.85
})

gsap.from(".nav_list" , {
    duration: 1,
    y: 100,
    opacity: 0,
    delay: 3.85
})

gsap.from(".home_social" , {
    duration: 1,
    scale: 0 ,
    opacity: 0,
    delay: 3.85
})




 /*==================== PROJECT SWIPER ====================*/
         let swiper = new Swiper(".project_cont", {
             effect: "coverflow",
             grabCursor: true,
             centeredSlides: true,
             slidesPerView: "auto",
             loop: true,
             spaceBetween: 28,
             coverflowEffect: {
                 rotate: 0,
                },
            })
       
    // if ($(window).width() > 1024){
    //     let wrapper = document.querySelector('.swiper-wrapper'),
    //     slide = document.querySelector('.swiper-slide'),
    //     swiper = document.querySelector('.swiper')

    //     wrapper.classList.remove('swiper-wrapper')
    //     slide.classList.remove('swiper-slide')
    //     swiper.classList.remove('swiper')
    // }
 /*==================== PROJECT Gsap ====================*/
//  gsap.from(".project_title" , {
//     scrollTrigger: {
//         trigger: ".project_title",
//         start: "30% 85%",
//         toggleActions: "play reset play reset"
//     },
//     y:100,
//     ease: "none",
//     opacity: 0,
//     duration: .3
// })
 gsap.from(".project_card" , {
    scrollTrigger: {
        trigger: ".project_card",
        start: "30% 90%",
        toggleActions: "play reset play reset",
    },
    x:100,
    ease: "none",
    opacity: 0,
    duration: .5
})

 /*==================== Tech Gsap ====================*/

 gsap.from(".tech_comp", {
     scrollTrigger: {
         trigger: ".tech_comp",
         start: "30% 90%",
         end: "100px top",
         toggleActions: "play reset play reset"
     },
     opacity: 0,
     duration: 1,
     scale: 0.2
 })
 gsap.from("#tech-title", {
     scrollTrigger: {
         trigger: "#tech-title",
         start: "30% 90%",
         end: "100px top",
         toggleActions: "play reset play reset",
     },
     opacity: 0,
     duration: 1,
     y:-100
 })
 gsap.from(".info_text", {
     scrollTrigger: {
         trigger: ".info_text",
         start: "30% 90%",
         toggleActions: "play reset play reset"
     },
     opacity: 0,
     duration: 1,
     y:-100
 })
 gsap.from(".tech_img,.tech_title", {
     scrollTrigger: {
         trigger: ".tech_img",
         start: "30% 90%",
         end: "450px top",
         toggleActions: "play reset play reset"
     },
     opacity: 0,
     duration: .5,
     stagger: .2,
     y:-100
 })
 
 /*==================== About Gsap ====================*/

// tl2 = gsap.timeline();

gsap.to(".title_scrub", {
    scrollTrigger: {
        trigger: ".title_scrub",
        start: "25% 45%",
        scrub: true ,
        // toggleActions: "play none reverse play"
    },
    y: 200,
    duration: .5
})

gsap.from(".img_cont", {
    scrollTrigger: {
        trigger: ".img_cont",
        start: "30% 90%",
        end: "190px top",
        toggleActions: "play reset play reset"
    },
    opacity: 0,
    scale: 0.1,
    duration: 1.5
})

gsap.from(".about_info" , {
    scrollTrigger: {
        trigger: ".about_info",
        start: "20% 90%",
        end: "190px top",
        toggleActions: "play reset play reset"
    },
    x:200,
    opacity: 0,
    duration: 1.5,
})

// })

// tl2.from(".project_scrub2", {
//     scrollTrigger: {
//         trigger: ".project_title",
//         start: "center 45%",
//         scrub: true ,
//         pin: true,
//         markers: true
//     },
//     x: -100,
//     opacity: 0,
//     duration: .5

// })
// tl2.from(".project_scrub3", {
//     scrollTrigger: {
//         trigger: ".project_title",
//         start: "center 45%",
//         scrub: true ,
//         pin: true,
//         markers: true
//     },
//     x: -100,
//     opacity: 0,
//     duration: .5

// })

// gsap.to(".project_scrub" , {
//     scrollTrigger:{
//         trigger: ".project_scrub",
//         start: "top 90%",
//         end: "top 20%",
//         scrub: 1,
//         markers: true
//     },
//     x:50 ,
//     ease: "none",
//     duration: 3
// });