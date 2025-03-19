// const navbar = document.getElementById("navbar");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 100) { // Adjust scroll threshold as needed
//     navbar.classList.add("shrink");
//   } else {
//     navbar.classList.remove("shrink");
//   }
// });
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.padding = "30px 10px";
//     document.getElementById("logo").style.fontSize = "25px";
//   } else {
//     document.getElementById("navbar").style.padding = "80px 10px";
//     document.getElementById("logo").style.fontSize = "35px";
//   }
// }
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("span-section").style.display = "none";
    document.getElementById("id-section").style.marginTop="10px"

    document.getElementById("navBar").style.height = "100px";
  } else {
 document.getElementById("span-section").style.display = "block";
    document.getElementById("navBar").style.height = "150px";
    document.getElementById("span-section").style.display = "flex";

  }
}
