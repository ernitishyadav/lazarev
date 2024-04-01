function navAnimation() {
  let nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", () => {
    let t1 = gsap.timeline();
    t1.to("#nav-bottom", {
      height: "21vh",
    });
    t1.to(".nav-part2 .nav-elm h5", {
      display: "block",
      
    });
    t1.from(".nav-part2 h5 span", {
        
      y: 0,
      // duration:0.3,
      stagger: {
        amount: 0.6,
      },
    });
  });

  nav.addEventListener("mouseleave", function () {
    let t1 = gsap.timeline();
    t1.to(".nav-part2 .nav-elm h5 span", {
      // transform:"translateY(25)",
      y: 25,
      stagger: {
        amount: 0.2,
      },
    });
    t1.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });
    t1.to("#nav-bottom", {
      height: 0,
      duration: 0.2,
    });
  });
}
navAnimation();
