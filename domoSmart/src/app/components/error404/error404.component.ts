import { Component, OnInit } from '@angular/core';

import { SesionService } from "../../services/sesion.service";

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {

  constructor(private sesionService: SesionService) { }

  ngOnInit(): void {

    this.sesionService.controlBtnSesion(false);

  }

}
