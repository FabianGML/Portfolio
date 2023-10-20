/*============SHOW MENU==================*/
const navToggle = document.querySelector('.nav_toggle'),
navMenu = document.querySelector('.nav_list'),
navClose = document.querySelector('.show-menu'),
main = document.getElementById('main')


/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.toggle('show-menu')
    })
}

window.addEventListener('scroll', () => {
    console.log(window.scrollY)
})

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(main){
    main.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.querySelector('.nav_list')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*============GSAP Hero section==================*/
gsap.registerPlugin(ScrollTrigger);

tl = gsap.timeline();

gsap.from(".name", {
    duration: .8,
    opacity: 0,
    x: 200,
});

gsap.to(".dev" , {
    duration: 1,
    text: "Software Developer"
})

tl.from(".pc_hero", {
    duration: .2,
    scale: 0.2,
    opacity: 0
});

tl.from(".php_hero", {
    duration: .2,
    scale: 0.2,
    opacity: 0
});

tl.from(".mysql_hero", {
    duration: .2,
    scale: 0.2,
    opacity: 0.0
});

gsap.from(".html_hero", {
    duration: .3,
    x : 100,
    scale: 0.2,
    opacity: 0,
    delay: .5,
    ease: "bounce"
});

gsap.from(".css_hero", {
    duration: .3,
    x : -100,
    scale: 0.2,
    opacity: 0,
    delay: .5,
    ease: "bounce"
});

gsap.from(".js_hero", {
    duration: 1,
    x : 100,
    y: 90,
    scale: 0.2,
    opacity: 0,
    delay: .8,
    ease: "expo"
});
gsap.from(".laravel_hero", {
    duration: 1,
    x : 20,
    y: 100,
    scale: 0.2,
    opacity: 0,
    delay: .8,
    ease: "expo"
});
gsap.from(".git_hero", {
    duration: 1,
    x : -100,
    y: 100,
    scale: 0.2,
    opacity: 0,
    delay: .8,
    ease: "expo"
});
gsap.from(".react_hero", {
    duration: 1,
    x : 80,
    y: -20,
    scale: 0.2,
    opacity: 0,
    delay: .8,
    ease: "expo"
});
gsap.from(".pyt_hero", {
    duration: 1,
    scale: 0.2,
    opacity: 0,
    delay: .8,
    ease: "expo"
});
gsap.from(".ang_hero", {
    duration: 1,
    x : -100,
    y: -10,
    scale: 0.2,
    opacity: 0,
    delay: .8,
    ease: "expo"
});

tl.from(".menu_contact" , {
    duration: .5,
    x: -200,
    opacity: 0,
})

gsap.from(".nav_toggle" , {
    duration: .79,
    x: 100,
    opacity: 0,
    delay: .8
})

gsap.from(".nav_list" , {
    duration: 1,
    y: 100,
    opacity: 0,
    delay: .8
})

gsap.from(".home_social" , {
    duration: 1,
    scale: 0 ,
    opacity: 0,
    delay: .8
})

 /*==================== Projects Gsap ====================*/
gsap.from(".item", {
    scrollTrigger: {
        trigger: ".container",
        start: "-15% 90%",
        end: "130% top",
        toggleActions: "play none none none"
    },
    opacity: 0,
    duration: .5, // reduce the tween duration when more projects cards are added
    stagger: .2,
    y:-100
})
 /*==================== Tech Gsap ====================*/
 gsap.from("#tech-title", {
     scrollTrigger: {
         trigger: "#tech-title",
         start: "-100% 90%",
         end: "300% top",
         toggleActions: "play none none none",
     },
     opacity: 0,
     duration: 1,
     y:-100
 })
 gsap.from(".info_text", {
     scrollTrigger: {
         trigger: ".info_text",
         start: "-20% 90%",
         end: "130% top",
         toggleActions: "play none none none",
     },
     opacity: 0,
     duration: 1,
     y:-100
 })
 gsap.from(".tech_img_cont", {
     scrollTrigger: {
         trigger: ".tech_imgs",
         start: "-15% 90%",
         end: "130% top",
         toggleActions: "play none none none"
     },
     opacity: 0,
     duration: .5,
     stagger: .02,
     y:-100
 })
 
 /*==================== About Gsap ====================*/

gsap.to(".title_scrub", {
    scrollTrigger: {
        trigger: ".title_scrub",
        start: "25% 45%",
        scrub: true ,
    },
    y: 200,
    duration: .5
})

gsap.from(".img_cont", {
    scrollTrigger: {
        trigger: ".img_cont",
        start: "-450% 90%",
        end: "290px top",
        toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.1,
    duration: .8
})

gsap.from(".about_info" , {
    scrollTrigger: {
        trigger: ".about_info",
        start: "top 90%",
        end: "350px top",
        toggleActions: "play none none none"
    },
    x:200,
    opacity: 0,
    duration: .8,
})

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_cont a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_cont a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CONTACT FORM ====================*/

const $form = document.getElementById('form'),
$buttonMailto = document.getElementById('mail')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get('name'))
    $buttonMailto.setAttribute('href', `mailto:fabiangtml@gmail.com?subject=${form.get('subject')}&body= Hi, my name is: ${form.get('name')} my email is: ${form.get('email')} and here is my message:${form.get('message')}`)
    $buttonMailto.click()

}

