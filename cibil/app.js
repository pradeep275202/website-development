window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("navigation-bar").style.padding = "px 5px";
    document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("ak").style.display = "none";
  } else {
    document.getElementById("navigation-bar").style.padding = "20px 10px";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("ak").style.display = "block";
  }
}
