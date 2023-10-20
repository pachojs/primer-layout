AOS.init()

const togglerButton = document.querySelector('.toggler-button');
const navBarMenu = document.querySelector('.nav_ul');
const buttonCloseInitalView =  document.querySelector('.boton-vista-inicial');
const initialView = document.querySelector('.contenedor-vista-inicial');
const container1 = document.querySelector('.container1');
const footer = document.getElementById('footer')

togglerButton.addEventListener('click', ()=>{
    navBarMenu.classList.toggle('inactive')
})


buttonCloseInitalView.addEventListener('click', () =>{
    initialView.classList.add('inactive');
    container1.classList.remove('inactive');
    footer.classList.remove('inactive');

})