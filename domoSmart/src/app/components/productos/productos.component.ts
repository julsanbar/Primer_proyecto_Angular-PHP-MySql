import { Component, OnInit } from '@angular/core';
import { SesionService } from "../../services/sesion.service";
import { EuroPipe } from "../../pipes/euro.pipe";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private sesionService: SesionService) { }

  localizacionDomotica: boolean = location.href.includes("domotica");

  detallesDomo1: string[] = 
    ['Fácil configuración y control a través de la aplicación móvil',
    'Gestiona cámaras y grabaciones a tu manera.',
    'Preparada para exteriores, protección 24/7 (IP66)',
    'Calidad y eficiencia, en conjunto.',
    'Onvif standard y MJPEG sobre HTTP']; 

  ngOnInit(): void {

    this.sesionService.controlBtnSesion(false);

  }

}
