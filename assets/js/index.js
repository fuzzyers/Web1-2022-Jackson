const BASE_URL = `https://api.unsplash.com`;
const blurani = document.querySelector(".center");

// Could be refactored to a queeryselectorall instead of
// an array need to give class in html for this
const IMGS = [
  document.querySelector(".default"),
  document.querySelector(".btn1"),
  document.querySelector(".btn2"),
  document.querySelector(".img4"),
  document.querySelector(".img5"),
  document.querySelector(".img6"),
  document.querySelector(".img7"),
  document.querySelector(".img8"),
];
let btn = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let shopbtn = document.querySelector(".shopbtn");
let imghover = document.querySelectorAll(".imghov");
let workgroup = document.querySelectorAll(".workgroup");
let arrow = document.querySelectorAll(".arrow");

//  Event for handling navbar dropdown menu
btn.addEventListener("mouseenter", (e) => {
  document.querySelector(".btn1").style.opacity = 1;
});
btn.addEventListener("mouseleave", (e) => {
  document.querySelector(".btn1").style.opacity = 0;
});

btn2.addEventListener("mouseenter", (e) => {
  document.querySelector(".btn2").style.opacity = 1;
});
btn2.addEventListener("mouseleave", (e) => {
  document.querySelector(".btn2").style.opacity = 0;
});

shopbtn.addEventListener("mouseover", (e) => {
  document.querySelector(".drop").style.display = "block";
  shopbtn = document.querySelector(".shopdrop");
  shopbtn.addEventListener("mouseenter", (e) => {
    document.querySelector(".shopdrop").style.display = "block";
  });
  shopbtn.addEventListener("mouseleave", (e) => {
    document.querySelector(".drop").style.display = "none";
  });
});

// Event for Showing "Read" text above image on hover
imghover.forEach((image) => {
  image.addEventListener("mouseover", (e) => {
    image.nextElementSibling.style.visibility = "visible";
  });
  image.addEventListener("mouseleave", (e) => {
    image.nextElementSibling.style.visibility = "hidden";
  });
});

// Event for Showing arrows on hover
workgroup.forEach((image) => {
  image.addEventListener("mouseover", (e) => {
    image.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.style.visibility =
      "visible";
  });
  image.addEventListener("mouseleave", (e) => {
    image.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.style.visibility =
      "hidden";
  });
});

// Image Api it assigns random images to an array of images
fetch(
  `${BASE_URL}/search/photos?query=coffee&client_id=LD9S7v_CkSIIMCO8_sgb1YPCHLrGqAsBJRcLdYQgXsc`
)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < IMGS.length; i++) {
      IMGS[i].src = data["results"][i]["urls"]["regular"];
    }
  });

// Handles oppening and closing roller doors
// Needs to be ractored far too much going on
let rollerleft = document.querySelector(".banner3");
let rollerright = document.querySelector(".banner4");
let content1 = document.querySelector(".contents1");
let content2 = document.querySelector(".contents2");
let base2 = document.querySelector(".base2");

rollerright.addEventListener("click", (e) => {
  base2.style.right = "calc(100% - 244px)";
  rollerright.style.borderRight = "1px solid #006eb6";
  rollerright.style.borderLeft = "none";
  content2.style.visibility = "visible";
  content2.style.width = "auto";
  content2.style.height = "auto";
  content1.style.visibility = "hidden";
  content1.style.width = "0";
  content1.style.height = "0";
});

rollerleft.addEventListener("click", (e) => {
  base2.style.right = "0";
  rollerright.style.borderRight = "none";
  rollerright.style.borderLeft = "1px solid #006eb6";
  content1.style.visibility = "visible";
  content1.style.width = "auto";
  content1.style.height = "auto";
  content2.style.visibility = "hidden";
  content2.style.width = "0";
  content2.style.height = "0";
});

// Checks viewport and assigns blur animation effect on image.
// Uses resources from stack overflow
// https://stackoverflow.com/questions/68441473/how-can-i-trigger-this-animation-to-start-once-in-viewport
function isInViewport(item) {
  let bounding = item.getBoundingClientRect(),
    myElementHeight = item.offsetHeight,
    myElementWidth = item.offsetWidth;

  if (
    bounding.top >= -myElementHeight &&
    bounding.left >= -myElementWidth &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) +
        myElementWidth &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) +
        myElementHeight
  ) {
    return true;
  } else {
    return false;
  }
}

window.addEventListener("scroll", function () {
  if (isInViewport(blurani)) {
    blurani.style.animation = "blur 5s";
  }
});

//Close and Open Searchbar
let searchbutton = document.querySelector(".searchbtn");
let searchbar = document.querySelector(".Searchbar");
let searchbaractive = false;
let close = document.querySelector(".close");

searchbutton.addEventListener("click", (e) => {
  if (searchbaractive) {
    searchbar.style.display = "none";
    searchbaractive = false;
  } else {
    searchbar.style.display = "block";
    searchbaractive = true;
  }
});

close.addEventListener("click", (e) => {
  searchbar.style.display = "none";
  searchbaractive = false;
});
