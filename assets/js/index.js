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


const BASE_URL = `https://api.unsplash.com`;
const IMGS = [document.querySelector(".default"),
document.querySelector(".btn1"),
document.querySelector(".btn2"),
document.querySelector(".img4"),
document.querySelector(".img5"),
document.querySelector(".img6"),
document.querySelector(".img7"),
document.querySelector(".img8")]


fetch(`${BASE_URL}/search/photos?query=coffee&client_id=LD9S7v_CkSIIMCO8_sgb1YPCHLrGqAsBJRcLdYQgXsc`)
 .then(response => response.json())
 .then(data => {
  for(let i = 0; i < IMGS.length; i++)
  {
    IMGS[i].src = data["results"][i]["urls"]["regular"];
  }
}) 
