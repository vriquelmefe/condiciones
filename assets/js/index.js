const logo = document.querySelector('.logoVane');
let bordeRojo = false;
function borderRed() {
      bordeRojo = !bordeRojo; 
    if (bordeRojo) {
    logo.style.border ='2px solid red'
    } else {
        logo.style.border = '';
    }
}

//Ejercicio 2 //

    const stickerGithubInput = document.querySelector("#github");
    const stickerGitInput = document.querySelector("#git");
    const stickerSlackInput = document.querySelector("#slack");
    const avisoStickerMuchos = document.querySelector('#avisoStickerMuchos');

    function contandoStickers() {
        const stickerGithub = parseInt(stickerGithubInput.value) || 0;
        const stickerGit = parseInt(stickerGitInput.value) || 0;
        const stickerSlack = parseInt(stickerSlackInput.value) || 0;

        const cantidad = stickerGit + stickerGithub + stickerSlack;
        console.log('slack', stickerSlack);
        console.log('cantidad', cantidad);

        if (cantidad >= 10) {
                avisoStickerMuchos.innerHTML = 'Llevas muchos stickers';
      
        } else {
                avisoStickerMuchos.innerHTML = '';
            
        }
    }

    const contarStickersButton = document.querySelector('#contarStickersButton');
    if (contarStickersButton) {
        contarStickersButton.addEventListener('click', contandoStickers);
    }

// Ejercicio 3 //

const primerNumero = document.querySelector('#numeroUno');
const segundoNumero = document.querySelector('#numeroDos');
const tercerNumero = document.querySelector('#numeroTres');
const mensaje = document.querySelector('#mensajeClave')
const passwordUno = 911;
const passwordDos = 714;
function verificandoPassword() {
    const digitoUno = parseInt(primerNumero.value) || 0;
const digitoDos = parseInt(segundoNumero.value) || 0;
    const digitotres = parseInt(tercerNumero.value) || 0;

    const verificadorPassword = parseInt(`${digitoUno}${digitoDos}${digitotres}`)
    console.log('verificando', verificadorPassword)
    if (verificadorPassword == passwordUno) {
mensaje.innerHTML = 'Password 1 es correcto'
        
    } else if (verificadorPassword == passwordDos) {
       mensaje.innerHTML = 'Password 2 es correcto'
    } else {
       mensaje.innerHTML = 'Password incorrecto'
    }
}