//scroll animation
$("li a").click(function(event){
    event.preventDefault();
    var id = $(this).attr("href");
    var divPosition = $(id).offset().top;
    $("html,body").animate({scrollTop: divPosition});
});

$(".btt a").click(function(event){
    event.preventDefault();
    var id = $(this).attr("href");
    var divPosition = $(id).offset().top;
    $("html,body").animate({scrollTop: divPosition});
});

function scrollBottom(){
    $("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
}

//navbar animation
$(document).ready(function(){
    resizeDiv();
    validate();
    $(".name, .email").change(validate);
});

function validate(){
    var emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if ($(".name").val().length>0 && $(".email").val().length>0 && emailRegEx.exec($(".email").val())) {
        $(".submit_btn").prop("disabled", false);
        $("#formValidation").fadeOut(500);
    }
    else {
        $(".submit_btn").prop("disabled", true);
        $("#formValidation").fadeIn(500);
    }
}

$(window).resize(function(event) {
    resizeDiv();
});

function resizeDiv() {
    vpw = $(window).width();
    vph = $(window).height();
    nvb = vph-55;
    cth = vph*5;
    $('.background').css({'width': vpw + 'px'});
    $('.one').css({'height': vph + 'px'});
    $('.three').css({'height': vph + 100 + 'px'});
    $('.five').css({'height': vph + 100 + 'px'});
    $('.navBar').css({'top':nvb + 'px'});
    $(window).scroll(function(e){
        $el = $('.navBar');
        if ($(this).scrollTop() > nvb && $el.css('position') != 'fixed'){
            $('.navBar').css({'position': 'fixed', 'top': '0px'});
        }
        if ($(this).scrollTop() < nvb && $el.css('position') != 'absolute'){
            $('.navBar').css({'position': 'absolute', 'top': nvb + 'px'});
        } 
    });
}

//Graph annimation
$(".three").hover(function(){
    $(".HTML").css({'width': 261});
    $(".CSS").css({'width': 225});
    $(".JS").css({'width': 186});
    $(".PHP").css({'width': 180});
    $(".JAVA").css({'width': 270});
    $(".CPP").css({'width': 210});
    $(".CREATE").css({'width': 300});
    $(".PYTHON").css({'width': 240});
    $(".SQL").css({'width': 204});
    $(".marker-number").css({'opacity': 1})
    },
    function(){
        $(".HTML").css({'width': 20});
        $(".CSS").css({'width': 20});
        $(".JS").css({'width': 20});
        $(".PHP").css({'width': 20});
        $(".JAVA").css({'width': 20});
        $(".CPP").css({'width': 20});
        $(".CREATE").css({'width': 20});
        $(".PYTHON").css({'width': 20});
        $(".SQL").css({'width': 20});
        $(".marker-number").css({'opacity': 0})
    }
);

//Parallax scrolling
$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('.background').css('top',-(scrolled*.4)+'px');
}

//Social Media Icons
