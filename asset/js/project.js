const h1 = document.querySelector('.mk');
console.log(h1)
console.log(new Typewriter(h1))

new Typewriter(h1,{
    //deletesPeed : 20
    loop :true,

})
    .typeString('Mes')
.pauseFor(300)
.typeString(' P')
.typeString('r')
.typeString('o')
    .pauseFor(300)
.typeString('j')
.typeString('e')
    .pauseFor(500)
.typeString('t')
.typeString('s')
    .pauseFor(700)
.start()
