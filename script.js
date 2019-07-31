// function mostrarBoobs(event) {
//     console.log(`Eixo X: ${event.pageX} Eixo Y: ${event.pageY}`)
//     if(event.pageX == 241 && event.pageY == 5 ){
//         alert("AAAAAAAAA, NÃO SAIAAAAAAA")
//     }
// }

// window.onmousemove = mostrarBoobs;


let email = document.querySelector('#email');
let senha = document.querySelector('#senha');
let botao = document.querySelector('button');
let nome = document.querySelector('#nome');

function cadastrar(){
    localStorage.setItem("email" ,email.value );
    localStorage.setItem("senha",senha.value);
    localStorage.setItem("nome",nome.value);
}
botao.onclick = cadastrar;


