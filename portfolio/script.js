const sidemenu = document.querySelector('#sidemenu');
const navbar = document.querySelector('nav');
const navlinks = document.querySelector('nav ul');
function openMenu(){
    sidemenu.style.transform = 'translateX(-16rem)';
}
function closeMenu(){
    sidemenu.style.transform = 'translateX(16rem)';
}
window.addEventListener('scroll', ()=>{
    if(scrollY>50){
        navbar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navlinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
    }else{
        navbar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navlinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');
    }
})