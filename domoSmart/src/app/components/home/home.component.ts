import { Component, OnInit } from '@angular/core';

import { SesionService } from "../../services/sesion.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private sesionService: SesionService) { }

  primeraColumna: string = "domótica";
  segundaColumna: string = "smarthome";

  ngOnInit(): void {

    this.sesionService.controlBtnSesion(false);

  }

}
