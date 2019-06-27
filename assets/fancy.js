//HOME PAGE JAVA//
$(document).ready(function(){
    $("#look").click(function(){
      $("#look").fadeOut(700);
      $(".textbub").fadeIn(750);
    });

    $(".otters").click(function(){
      $("#otters").fadeIn();
    });

    $("#projs").fadeIn(500);
  });


  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }  