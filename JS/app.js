import {Notificacion} from './notificacion.js'
import {AdminPersonajes} from './personaje.js'

const nombreInput = document.querySelector('#nombre');
const nivelInput = document.querySelector('#nivel');
const magiaInput = document.querySelector('#magia');
const categoriaInput = document.querySelector('#categoria');

export const formulario = document.querySelector('#formulario-personaje');
export const contPersonajes = document.querySelector('#personajes');

export const personajeObj = {
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

//Inicializacion de clases
const personajes = new AdminPersonajes();


//Functions
function datosRegistro (e) {
    personajeObj[e.target.name] = e.target.value;

}

function btnSubmit(e) {
    e.preventDefault();

    if (Object.values(personajeObj).some(valor => valor.trim() === '')) {
        const notificacion = new Notificacion({
            mensaje : 'Llena todos los campos',
            tipo : 'error'
        });

        return;
    } else {

        new Notificacion({
            mensaje : 'Personaje Creado',
            tipo : 'exito'
        })
        
        personajes.agregar({...personajeObj});
    }

    formulario.reset();
    reiniciarObjeto();
}

function reiniciarObjeto() {
    Object.assign(personajeObj, {
        nombre: '',
        nivel: '',
        magia: '',
        categoria: ''
    })
}