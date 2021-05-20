import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { SesionService } from "../../services/sesion.service";
import { RestService } from "../../services/rest.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private sesionService: SesionService, private formBuilder: FormBuilder, private restService: RestService, private router: Router) { }
  
  public registroForm!: FormGroup;

  ngOnInit(): void {

    this.sesionService.controlBtnSesion(false);
    
    this.registroForm = this.formBuilder.group({

      nombre: ['',
      [
        Validators.required,
        Validators.pattern(/^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/)
      ]
    ],
      apellidos: ['',
      [
        Validators.required,
        Validators.pattern(/^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/)
      ]
    ],
      telefono: ['',
      [
        Validators.required,
        Validators.pattern(/^[9|6]{1}([\d]{2}[-]*){3}[\d]{2}$/)
      ]
    ],
      nacimiento: ['',
      [
        Validators.required
      ]
    ],
      email: ['',
      [
        Validators.required,
        Validators.email
      ]
    ],
      password: ['',
      [
        Validators.required,
        //[8,15] longitud, no espacios, 1 mayus, 1 minus, 1 especial, 1 num
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/)
      ]
    ]
    });

  }

  enviar(){
    //ENVIAR A LA BBDD, ASIGNAR A LA SESION Y REDIRECCIONAR
    
    this.restService.post('http://localhost:80/backendAngular/registro.php',this.registroForm.value).subscribe((respuesta: any) => {
      
      if(respuesta === true){

        this.sesionService.iniciarSesion(this.registroForm.get('nombre')?.value);
        location.href = "/home";
        //this.router.navigateByUrl("/home");

      }
    

    });

  }

}
