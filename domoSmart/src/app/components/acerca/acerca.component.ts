import { Component, OnInit } from '@angular/core';

import { Autor } from "../../models/autor.model";

import { SesionService } from "../../services/sesion.service";

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})

export class AcercaComponent implements OnInit {

  constructor(private sesionService: SesionService) { }

  autor = new Autor('Julián','Sanjuán Barrera','Sevilla','690-872-921','@djeyrula', 'sanjuan611@gmail.com');

  ngOnInit(): void {

    this.sesionService.controlBtnSesion(false);

  }

}
