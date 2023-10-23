AOS.init()

const togglerButton = document.querySelector('.toggler-button');
const navBarMenu = document.querySelector('.nav_ul');
const buttonCloseInitalView =  document.querySelector('.boton-vista-inicial');
const initialView = document.querySelector('.contenedor-vista-inicial');
const closerDiv = document.querySelector('.closerDiv');
const footer = document.getElementById('footer')



//Menu Scroll
let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function(){
    // console.log(window.pageYOffset);
    let desplazamientoActual = window.pageYOffset;

    if (ubicacionPrincipal >= desplazamientoActual) {
        document.getElementsByTagName("header")[0].style.top = "0px";        
    }else{
        document.getElementsByTagName("header")[0].style.top = "-100px"; 
    };

    ubicacionPrincipal = desplazamientoActual;
});

// menú hamburguesa
togglerButton.addEventListener('click', ()=>{
    navBarMenu.classList.toggle('inactive')
})

// menú vista inicial
buttonCloseInitalView.addEventListener('click', () =>{
    initialView.classList.add('inactive');
    closerDiv.classList.remove('inactive');
    footer.classList.remove('inactive');

})

