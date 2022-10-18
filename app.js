// let dot1 = document.querySelector("#dot1");
// let dot2 = document.querySelector("#dot2");
// let dot3 = document.querySelector("#dot3");

let arrowLeft = document.querySelector(".left-arrow");
let arrowRight = document.querySelector(".right-arrow");

let slide1 = document.querySelector("#slide1");
let slide2 = document.querySelector("#slide2");
let slide3 = document.querySelector("#slide3");

let currentSlide = 1

let hideSlide = () => {
    let active = document.querySelector(".active");
    console.log(active)
    active.classList.remove("active")
}

let showSlide = (number) => {
    hideSlide();
    let slideToActivate = document.querySelector("#slide" + number);
    slideToActivate.classList.add("active")
    currentSlide = number
    console.log(currentSlide)
}

for (let i = 1; i < 4; i ++) {
    let dot = document.querySelector("#dot" + i);
    let showNewSlide = () => {
        showSlide(i)
    }
    dot.addEventListener("click", showNewSlide);
}

// // let showSlide1 = () => {
// //     hideSlide();
// //     showSlide(1);
// // }

// // let showSlide2 = () => {
// //     hideSlide();
// //     showSlide(2);
// // }

// // let showSlide3 = () => {
// //     hideSlide();
// //     showSlide(3);
// // }

// dot1.addEventListener("click", showSlide1);
// dot2.addEventListener("click", showSlide2);
// dot3.addEventListener("click", showSlide3);

let showPreviousSlide = () => {
    if (currentSlide == 1) {
        currentSlide = 3;
    } else {
        currentSlide = currentSlide - 1;
    }
    showSlide(currentSlide);
}

let showNextSlide = () => {
    if (currentSlide == 3) {
        currentSlide = 1;
    } else {
        currentSlide = currentSlide + 1;
    }
    showSlide(currentSlide);
}

arrowLeft.addEventListener("click", showPreviousSlide);
arrowRight.addEventListener("click", showNextSlide);