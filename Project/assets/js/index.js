let btn = document.getElementById("btn1");
    btn.addEventListener("mouseenter", e => {
      document.querySelector("." + "btn1").style.opacity = 1;
    });
btn.addEventListener("mouseleave", e => {
      document.querySelector("." + "btn1").style.opacity = 0;
    });


let btn2 = document.getElementById("btn2");
    btn2.addEventListener("mouseenter", e => {
      document.querySelector("." + "btn2").style.opacity = 1;
    });
btn2.addEventListener("mouseleave", e => {
      document.querySelector("." + "btn2").style.opacity = 0;
    });

let shopbtn = document.querySelector(".shopbtn");
shopbtn.addEventListener("mouseenter", e => {
  document.querySelector(".drop").style.display = "block";
});


shopbtn.addEventListener("mouseleave", e => {
  setTimeout(() => {
    document.querySelector(".drop").style.display = "none";
  },"1000")
});
