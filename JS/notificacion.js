import {formulario} from './app.js';

export class Notificacion {
    constructor ({mensaje, tipo}) {
        this.mensaje = mensaje;
        this.tipo = tipo;
        this.mostrar();
    }

    mostrar() {
        const alerta = createElement('div');
        alerta.classlist.add('alerta');

        const alertaPrevia = document.querySelector('alerta');
        alertaPrevia?.remove();

        this.tipo === 'error' ? alerta.classlist.add('error') : alerta.classlist.add('exito');

        alerta.textContent = this.mensaje;

        formulario.parentElement.insertBefore(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000)


    }   
}