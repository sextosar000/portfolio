//HOME PAGE JAVA//
$(document).ready(function(){
    $("#look").click(function(){
      $("#look").fadeOut(700);
      $(".textbub").fadeIn(750);
    });

    $(".otters").click(function(){
      $("#otters").fadeIn();
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



  jQuery(document).ready(function() {
     
    /*
    Contact form
    */
    $('.contact-form form input[type="text"], .contact-form form textarea').on('focus', function() {
        $('.contact-form form input[type="text"], .contact-form form textarea').removeClass('input-error');
    });
    $('.contact-form form').submit(function(e) {
        e.preventDefault();
        $('.contact-form form input[type="text"], .contact-form form textarea').removeClass('input-error');
        var postdata = $('.contact-form form').serialize();
        $.ajax({
            type: 'POST',
            url: 'assets/contact.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                if(json.emailMessage != '') {
                    $('.contact-form form .contact-email').addClass('input-error');
                }
                if(json.subjectMessage != '') {
                    $('.contact-form form .contact-subject').addClass('input-error');
                }
                if(json.messageMessage != '') {
                    $('.contact-form form textarea').addClass('input-error');
                }
                if(json.antispamMessage != '') {
                    $('.contact-form form .contact-antispam').addClass('input-error');
                }
                if(json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '' && json.antispamMessage == '') {
                    $('.contact-form form').fadeOut('fast', function() {
                        $('.contact-form').append('<p>Thanks for contacting us! We will get back to you very soon.</p>');
                        // reload background
                        $.backstretch("resize");
                    });
                }
            }
        });
    });
     
});