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

