var header = document.querySelector('header');
var menu = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');
var darkmode = document.querySelector('#darkmode');
var hideMenu = document.querySelector('.hideMenu');

menu.onclick=()=>{
    if(navbar.classList.contains('active')){
        navbar.classList.remove('active');
    }
    else{
        navbar.classList.add('active');
    }
   
}

navbar.addEventListener('click', (event) => {
    if (event.target.tagName.toLowerCase() === 'a' && event.target.classList.contains('hideMenu')) {
        navbar.classList.remove('active');;
    }
    return;
  });
  
darkmode.onclick =()=>{
    if(darkmode.classList.contains('fa-moon')){
        darkmode.classList.replace('fa-moon','fa-sun');
        document.body.classList.add('active');
    }
    else{
        darkmode.classList.replace('fa-sun','fa-moon');
        document.body.classList.remove('active');
    }
}
