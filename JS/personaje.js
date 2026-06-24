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


        // this.personajes = array.forEach(obj => {
            
        // });
        
    }
}