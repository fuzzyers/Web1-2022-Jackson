let btn = document.getElementById("btn1");
    btn.addEventListener("mouseenter", e => {
      document.querySelector(".btn1").style.opacity = 1;
    });
btn.addEventListener("mouseleave", e => {
      document.querySelector(".btn1").style.opacity = 0;
    });


let btn2 = document.getElementById("btn2");
    btn2.addEventListener("mouseenter", e => {
      document.querySelector(".btn2").style.opacity = 1;
    });
btn2.addEventListener("mouseleave", e => {
      document.querySelector(".btn2").style.opacity = 0;
    });

let shopbtn = document.querySelector(".shopbtn");
shopbtn.addEventListener("mouseover", e => {
  document.querySelector(".drop").style.display = "block";
  shopbtn = document.querySelector(".shopdrop")
  shopbtn.addEventListener("mouseenter", e => {
    document.querySelector(".shopdrop").style.display = "block";
  })
  shopbtn.addEventListener("mouseleave", e => {
    document.querySelector(".drop").style.display = "none";

  })
});

