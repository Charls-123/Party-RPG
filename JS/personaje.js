import {contPersonajes, formulario, personajeObj} from './app.js'

export class AdminPersonajes {
    constructor() {
        this.personajes = [];
    }

    agregar(personajeObj) {
        this.personajes = [...this.personajes, personajeObj];
        this.mostrar();
    }

    mostrar() {

        while(contPersonajes.firstChild) {
            contPersonajes.removeChild(contPersonajes.firstChild);
        }

        if(this.personajes.length === 0) {
            contPersonajes.innerHTML = `
                <p>...!Aun no hay ningun personaje ingresado¡... leorlero</p>
            `;
        }

        this.personajes.forEach(obj => {
            const divPersonajes = document.createElement('DIV');
            divPersonajes.classList.add('contenedor')


            //Crendo las etiquetas de los datos de perosnaje
            const tipo = document.createElement('img');
            
            const tiposPersonajes = {
                'Mago': 'img/sombrero-magico.png',
                'Guerrero': 'img/caballero.png',
                'Santo': 'img/biblia.png',
                'Ladron': 'img/ladron.png',
                'Invocador': 'img/grimorio.png',
                'Sabio': 'img/libro.png',
            }

            tipo.src = tiposPersonajes[obj.categoria] || 'img/desconocido.png'

            tipo.classList.add('estilo-img');

            const Nombre = document.createElement('P');
            Nombre.innerHTML = `${obj.nombre}`;

            //Agregar los p al Div de personajes
            divPersonajes.appendChild(tipo);
            divPersonajes.appendChild(Nombre);


            //Agregarlos al contenedor de personajes
            contPersonajes.appendChild(divPersonajes);
        });
        

    }
}