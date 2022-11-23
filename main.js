window.addEventListener("scroll",function(){
    var header= document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})
window.addEventListener("scroll",function(){
    var header= document.querySelector(".topnav");
    header.classList.toggle("sticky",window.scrollY > 0);
})
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

 }
 window.addEventListener("load", function(){
    //setTimeout() method sets a timer which executes a function once the timer expires
        setTimeout(
            function open(event){
                document.getElementById("myForm").style.display = "block";
            },
            10000 // 1 seconds = 1000 milliseconds
        )
});
 function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  } 

// landing page slider for web view 
  
 var myIndex1 = 0;
carousel1();

function carousel1() {
  var j;
  var y = document.getElementsByClassName("mySlides");
  for (j = 0; j < 3; j++) {
    y[j].style.display = "none";  
  }
  myIndex1++;
  if (myIndex1 > 3) {myIndex1 = 1}    
  y[myIndex1-1].style.display = "block";  
  setTimeout(carousel1, 5000);
}

// landing page slider for mobile view
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 6000);
}
var myIndex3 = 0;
carousel2();

function carousel2() {
  var k;
  var z = document.getElementsByClassName("gallery-show");
  for (k = 0; k < z.length; k++) {
    z[k].style.display = "none";  
  }
  myIndex3++;
  if (myIndex3 > z.length) {myIndex3 = 1}    
  z[myIndex3-1].style.display = "block";  
  setTimeout(carousel2, 3000);
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



