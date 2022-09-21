
/* menu*/

const btnmenu=document.getElementById('btnmenu');
function OlaMenu(event){
    if(event.type === 'touchstart')event.preventDefault();

const nav = document.getElementById('nav');
nav.classList.toggle('active')
const active = nav.classList.contains('active')
event.currentTarget.setAttribute('aria-expanded', 'active');
if(active){
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
}else{
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
} 
}
btnmenu.addEventListener('click',OlaMenu);
btnmenu.addEventListener('toushstart',OlaMenu);

/*slider*/

var counter =1;
setInterval(function(){
    document.getElementById('radio' = counter).checked = true;
    counter++;
    if(counter > 4){
        counter= 1;
    }
},5000);