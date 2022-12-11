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
console.log(float)
let vole = true
setInterval(function() {
         if (vole == true){
             float.style.paddingTop = '0.5rem'
             vole = false
         } else if (vole == false){
             float.style.paddingTop = '0rem'
             vole = true
         }
}, 1000);
