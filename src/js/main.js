//navbar toggler
let navToggler = document.getElementById('navbar-toggler');
let navCollapse = document.querySelector('.navbar-collapse');

navToggler.addEventListener('click', () => {
    navCollapse.classList.toggle('showNav');
});

function changeFilterBtn(){
    filterBtns.forEach((btn) => {
        btn.classList.remove('btn-active');
    });
}

$('home').addClass("active");


$("#home").click(function() {
     $('html, body').animate({
         scrollTop:        $("home").offset().top-10
     }, 1000);
  return false;
 });


 $("#about").click(function() {
    $('html, body').animate({
        scrollTop:        $("about").offset().top-10
    }, 1000);
 return false;
});

$("#history").click(function() {
    $(' html,body') .animate({
        scrollTop:        $("history").offset().top-112
    }, 1000);
 return false;
});

$("#images").click(function() {
    $(this).addClass("active");
       $('html,body ') .animate({
           scrollTop:        $("images").offset().top-112
       }, 1000);
    return false;
   });



