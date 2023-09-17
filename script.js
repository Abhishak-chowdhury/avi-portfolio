/* ------- three bar---------------*/
let menu=document.getElementById('menu');
let navbar=document.getElementsByClassName('navbar')[0];
menu.onclick= () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('acc');
};
/* ------- scroll activation---------------*/
let section=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
window.onscroll= () =>{
    section.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset && top<offset+height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        }
    });
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
    /*-----------remove list-----------*/
    menu.classList.remove('bx-x');
    navbar.classList.remove('acc');
};

/*-----------Scroll reval-----------*/
ScrollReveal({ 
    //reset: true,
    distance:'40px',
    duration:2000,
    delay:100
});
ScrollReveal().reveal('.content,.heading', { origin:'top' });
ScrollReveal().reveal('.main .home-img img ,.services .container ,.main-content, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.main .content h1 ,.about .about-img img', { origin:'left' });
ScrollReveal().reveal('.main .content p ,.about-content', { origin:'right' });


const typed=new Typed('.multiple-txt',{
    strings: ['Fontent developer','Programmer','Android developer','Digital marketing developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});