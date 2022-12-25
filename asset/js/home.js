console.log('coucou');
let home = document.querySelector('.home_bleu a');
console.log(home)
let contact_me = document.querySelector('.contact_me');
console.log(contact_me)
let my_project = document.querySelector('.my_project');
console.log(my_project)
let service = document.querySelector('.service');
console.log(service);
let barre_bleu = document.querySelector('.barre_bleu');
console.log(barre_bleu);
home.addEventListener('mouseenter', function(evt){
    evt.preventDefault();
    barre_bleu.style.right = '20%'
})

contact_me.addEventListener('mouseenter', function(evt){
    evt.preventDefault();
    barre_bleu.style.right = '-195%'
})

my_project.addEventListener('mouseenter', function(evt){
    evt.preventDefault();
    barre_bleu.style.right = '-450%'
})

service.addEventListener('mouseenter', function(evt){
    evt.preventDefault();
    barre_bleu.style.right = '-660%'
})

let float = document.querySelector('.cadre_video');
const mt = document.querySelectorAll('.img_mt');
console.log(mt[0])
let mtr = mt[0];




const burger =  document.querySelector(".burger")
const home_burger = document.querySelector(".bloc_nav")
console.log(burger);
const prj = document.querySelector('#project');
const service_v = document.querySelector('#service')
const about = document.querySelector('#about_me')
const contact = document.querySelector('#formulaire')
const lien = document.querySelectorAll('.bloc_nav a');
console.log(lien)
const l1 = lien[1]
const l = lien[0]
const l2 = lien[2]
const l3 = lien[3]
const wrap = document.querySelector('.wrap')
burger.addEventListener('click',()=>{
    home_burger.classList.toggle('mobile-menu');


  menu = document.querySelector('.mobile-menu');
   if (menu != null ){
       wrap.style.marginTop = '70rem'

   } else{
       wrap.style.marginTop = '4rem'

   }

})

l1.addEventListener('click', function(evt){
    home_burger.classList.toggle('mobile-menu');

        wrap.style.marginTop = '4rem'

})

l2.addEventListener('click', function(evt){
    home_burger.classList.toggle('mobile-menu');

        wrap.style.marginTop = '4rem'


})

l.addEventListener('click', function(evt){
    evt.preventDefault();
    home_burger.classList.toggle('mobile-menu');

        wrap.style.marginTop = '4rem'


})

l3.addEventListener('click', function(evt){

    home_burger.classList.toggle('mobile-menu');

        wrap.style.marginTop = '4rem'


})



