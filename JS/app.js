const nombreInput = document.querySelector('#nombre');
const nivelInput = document.querySelector('#nivel');
const magiaInput = document.querySelector('#magia');
const categoriaInput = document.querySelector('#categoria');

const formulario = document.querySelector('#formulario-personaje');

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

//Functions

function datosRegistro (e) {
    personajeObj[e.target.name] = e.target.value;
    console.log(personajeObj);
}

function btnSubmit(e) {
    e.preventDefault();

    console.log(personajeObj);
}