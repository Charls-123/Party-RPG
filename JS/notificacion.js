import {formulario} from './app.js';

export class Notificacion {
    constructor ({mensaje, tipo}) {
        this.mensaje = mensaje;
        this.tipo = tipo;
        this.mostrar();
    }

    mostrar() {
        const alerta = document.createElement('DIV');
        alerta.classList.add('alerta');

        const alertaPrevia = document.querySelector('.alerta');
        alertaPrevia?.remove();

        this.tipo === 'error' ? alerta.classList.add('error') : alerta.classList.add('exito');

        alerta.textContent = this.mensaje;

        formulario.parentElement.insertBefore(alerta, formulario);

        setTimeout(() => {
            alerta.remove();
        }, 3000);


    }   
}