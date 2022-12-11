const h1 = document.querySelector('.mk');
console.log(h1)
console.log(new Typewriter(h1))

new Typewriter(h1,{
    //deletesPeed : 20
    loop :true,

})
    .typeString('My')
.pauseFor(300)
.typeString(' P')
.typeString('r')
.typeString('o')
    .pauseFor(300)
.typeString('j')
.typeString('e')
    .pauseFor(500)
.typeString('c')
.typeString('t')
    .pauseFor(700)
.start()
