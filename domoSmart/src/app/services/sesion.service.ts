import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//Servicio donde se engloba todo aquello relacionado con la sesión
//ya sea eliminación,creación del objeto como hablitar los controles
//relacionados con el mismo
export class SesionService {

  constructor() { }

  nombreSesion: string = 'usuario';

  //Controla si el botón de inicio de sesion esta habilitado o no
  //pasando por parámetros la opción querida en cada componente
  controlBtnSesion(deshabilita: boolean){

    let button: any = document.getElementById("btnInicio");

    if(button !== null){

      button.disabled = deshabilita;

    }

  }

  
  iniciarSesion(nombre: string): void{

    sessionStorage.setItem(this.nombreSesion,nombre);

  }

  devuelveNombreSesion(): string | null{

    return sessionStorage.getItem(this.nombreSesion);

  }

  cerrarSesion(): void{

    sessionStorage.removeItem(this.nombreSesion);
    //this.router.onSameUrlNavigation = 'reload';
    window.location.reload();

  }

}
