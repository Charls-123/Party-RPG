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

            return;
        }

        const tiposPersonajes = {
                'Mago': 'img/sombrero-magico.png',
                'Guerrero': 'img/caballero.png',
                'Santo': 'img/biblia.png',
                'Ladron': 'img/ladron.png',
                'Invocador': 'img/grimorio.png',
                'Sabio': 'img/libro.png',
        }

        this.personajes.forEach(obj => {
            const divPersonajes = document.createElement('DIV');
            divPersonajes.classList.add('contenedor')


            //Crendo las etiquetas de los datos de perosnaje
            const tipo = document.createElement('img');
            tipo.src = tiposPersonajes[obj.categoria] || 'img/desconocido.png'
            tipo.classList.add('estilo-img');

            const Nombre = document.createElement('P');
            Nombre.innerHTML = `${obj.nombre}`;

            const nivel = document.createElement('P');
            nivel.innerHTML = `${obj.nivel}`;

            const contMagiaSalud = document.createElement('DIV');
            contMagiaSalud.classList.add('contenedor-MS');

            const salud = document.createElement('p');
            salud.innerHTML = `
                <span class="salud">PS: </span> ${obj.salud}
            `;

            const magia = document.createElement('p');
            magia.innerHTML = `
                <span class="magia">PM: </span> ${obj.magia}
            `;

            //agrgando salud y magia a contMagiaSalud
            contMagiaSalud.appendChild(salud);
            contMagiaSalud.appendChild(magia);

            //Agregar los p al Div de personajes
            divPersonajes.appendChild(tipo);
            divPersonajes.appendChild(Nombre);
            divPersonajes.appendChild(nivel);
            divPersonajes.appendChild(contMagiaSalud);

            //Agregarlos al contenedor de personajes
            contPersonajes.appendChild(divPersonajes);
        });
        

    }
}