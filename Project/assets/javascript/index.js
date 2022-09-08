let btn = document.getElementById("btn1");
    btn.addEventListener("mouseenter", e => {
      document.querySelector(".img2").style.opacity = 1;
    });
btn.addEventListener("mouseleave", e => {
      document.querySelector(".img2").style.opacity = 0;
    });

let btn2 = document.getElementById("btn2");
    btn2.addEventListener("mouseenter", e => {
      document.querySelector(".img3").style.opacity = 1;
    });
btn2.addEventListener("mouseleave", e => {
      document.querySelector(".img3").style.opacity = 0;
    });

