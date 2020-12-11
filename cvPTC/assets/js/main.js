// MENU SHOW
const showMenu = (toggleId,navId) =>{
    const change = document.getElementById(toggleId)
    const classChange = document.getElementById(navId)
    if(change && classChange){
        change.addEventListener('click',()=>{
            classChange.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')
// ACTIVE AND REMOVE MENU
const navLink = document.querySelectorAll('.nav__menu--list-link')
function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

// scrollTop
var mybutton = document.getElementById("myBtn");

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
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//copy speed

// function copy(copyId){
//     var $inp=$("<input>");
//     $("body").append($inp);
//     $inp.val($(""+copyId).text()).select();
//     document.execCommand("copy");
    // $inp.remove();
    // $(".alert").fadeIn(500,function(){
    //     $(".alert").fadeOut();
    // });
// }
// $(document).ready(funciton(){
//     $("#idgoogle").click(
//         function(){
//             copy('thecuong1896@gmail.com');
//         })
// });

// const idgoogle = document.getElementById("#idgoogle");
// const copy = document.getElementById("#idgoogle");
// copy.onclick = funtion(){
//     idgoogle.select('thecuong1896@gmail.com');
//     document.execCommand("#idgoogle");
// };

// scroll reveal animation


// const sr = ScrollReveal({
//     origin:'top',
//     distance:'80px',
//     duration:2000,
//     reset:true
// }) 

// sr.reveal('.home__data--title',{})

// sr.reveal('.home__social',{delay:200})

// sr.reveal('.about',{delay:400})

// sr.reveal('.skills',{interval:200})

// sr.reveal('.work',{})

// sr.reveal('.contact',{delay:200})

// sr.reveal('.footer',{delay:400})
