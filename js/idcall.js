// var page = document.getElementById('product_call');
// var mainpage = document.getElementById('hide-body');

// function idcall(){
//     page.style.display = "block";
//     mainpage.style.display = "none";
// }

const showButton = document.getElementById("product_call");
const myElement = document.getElementById("hide-body");

// Add a click event listener to the "Show" button
showButton.addEventListener("click", function () {
  myElement.style.display = "block";
  // Push a new state to the history
  window.history.pushState({ display: "block" }, "");
});

// Listen for the popstate event (back button clicked)
window.addEventListener("popstate", function (event) {
  if (event.state && event.state.display === "block") {
    myElement.style.display = "block";
  } else {
    myElement.style.display = "none";
  }
});
