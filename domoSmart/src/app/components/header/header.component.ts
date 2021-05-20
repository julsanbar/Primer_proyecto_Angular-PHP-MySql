import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from "../../services/sesion.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //Para eliminar el comportamiento por defecto del button al ser pulsado,
  //importamos la directiva router, y con ella podemos saber en que ruta estamos
  constructor(private router: Router, private sesion: SesionService) {}

  gestionSesion: any = this.sesion;

  redirecciona(){
    //Hacemos uso de las ventajas que tiene router para indicar la url a la que tiene 
    //que dirigirse
    this.router.navigateByUrl('/sesion');
    //location.href = "/sesion"
    
  }

  ngOnInit(): void{

  }

}
