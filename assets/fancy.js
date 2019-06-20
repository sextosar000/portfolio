//HOME PAGE JAVA//
$(document).ready(function(){
    $("#look").click(function(){
      $("#look").fadeOut(700);
      $(".textbub").fadeIn(750);
    });
  });


  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "beige";
  }  

//ABOUT ME JAVA//