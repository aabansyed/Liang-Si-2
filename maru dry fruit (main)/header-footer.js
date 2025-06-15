//   this is clock animation

const $ = (selector) => {
    return document.querySelector(selector);
}
const hour = $('.hour');
const dot = $('.dot');
const min = $('.min');
const week = $('.week');
let showDot = true;

function update(){
    showDot = !showDot;
    const now = new Date();

    if (showDot) {
        dot.classList.add('invisible')
    } else{
        dot.classList.remove('invisible')
    }
    hour.textContent = String(now.getHours())
    .padStart(2,'0');
    min.textContent = String(now.getMinutes())
    .padStart(2,'0');
    
    Array
      .from(week.children)
      .forEach(
        (ele) => {
            ele.classList.remove('active');
        }
      );
    week
      .children[now.getDay()]
      .classList
      .add('active');  
};

setInterval(update, 500);   






// this gsap is used on nav bar where the line appears on scroll 

gsap.to("nav",{
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        start: "top 0",
        end: "top -20%",
        scrub : true
    }
})

gsap.to(".nav-after",{
    width: "100%",
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        start: "top 0",
        end: "top -20%",
        scrub : true
    }
})

