import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usuarioActual'
})
export class UsuarioActualPipe implements PipeTransform {

  transform(value: any): string {

    if(value === null){

      return "anónimo";

    }else{

      return value;

    }

  }

}
