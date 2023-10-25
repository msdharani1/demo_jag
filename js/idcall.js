 var page = document.getElementById('product_call');
 var mainpage = document.getElementById('hide-body');

 function idcall(){
     page.style.display = "block";
     mainpage.style.display = "none";
}


window.addEventListener("popstate", function (event) {
    // Check if the event state is set to "index.html"
    if (event.state === "index.html") {
      // Load the index.html file
      window.location.href = "index.html";
    }
  });