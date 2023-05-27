var header = document.querySelector('header');
var menu = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');
var darkmode = document.querySelector('#darkmode');


menu.onclick =()=>{
    navbar.classList.toggle('active');
}

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
