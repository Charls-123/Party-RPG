import {Notificacion} from './notificacion.js'
import {} from './personaje.js'

const nombreInput = document.querySelector('#nombre');
const nivelInput = document.querySelector('#nivel');
const magiaInput = document.querySelector('#magia');
const categoriaInput = document.querySelector('#categoria');

export const formulario = document.querySelector('#formulario-personaje');

const personajeObj = {
    nombre: '',
    nivel: '',
    magia: '',
    categoria: 'x'
};

// Eventos
nombreInput.addEventListener('change', datosRegistro);
nivelInput.addEventListener('change', datosRegistro);
magiaInput.addEventListener('change', datosRegistro);
categoriaInput.addEventListener('change', datosRegistro);

formulario.addEventListener('submit', btnSubmit);

//Instancias
const notificacion = new Notificacion({});

//Functions
function datosRegistro (e) {
    personajeObj[e.target.name] = e.target.value;
    console.log(personajeObj);
}

function btnSubmit(e) {
    e.preventDefault();

    if (Object.values(personajeObj).some(valor => valor.trim() === '')) {
        notificacion({
            mensaje : 'Llena todos los campos',
            tipo : 'error'
        });

        console.log(notificacion)

        return;
    } else {
        console.log('personaje creados')
    }
}