import { Component, OnInit } from '@angular/core';
import { SesionService } from "../../services/sesion.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  fecha: any = new Date();
  ciudad: string = "sevilla";

  //Recogemos el usuario establecido en el sessionStorage
  //Establecemos any como parámetro de salida debido a que podría ser null
  usuario: string | null = this.sesion.devuelveNombreSesion();

  constructor(private sesion: SesionService) { }

  ngOnInit(): void {

  }

}
