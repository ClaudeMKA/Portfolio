const btn = document.querySelector('.rond_blanc');
console.log(btn)
btn.addEventListener('click', function(evt){
    evt.preventDefault();
    const body = document.body
    const lien = document.querySelectorAll('.prj')
    console.log(lien)
    btn.classList.toggle('rond_blanc2');
    if (btn.classList.contains('rond_blanc2')){
        body.style.backgroundColor = '#4D4D4D'
        for (let i=0; i < lien.length; i++){
            lien[i].classList.toggle('lien')
        }

    } else {
        body.style.backgroundColor = '#ECF1F4'
        for (let i=0; i < lien.length; i++){
            lien[i].classList.remove('lien')
        }
    }




})