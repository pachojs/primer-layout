const togglerButton = document.querySelector('.toggler-button')
const navBarMenu = document.querySelector('.nav_ul')


togglerButton.addEventListener('click', ()=>{
    navBarMenu.classList.toggle('inactive')
})


