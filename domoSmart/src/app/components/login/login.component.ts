import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { SesionService } from "../../services/sesion.service";
import { RestService } from "../../services/rest.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private sesionService: SesionService, private formBuilder: FormBuilder, private restService: RestService, private router: Router) { }

  //Debido a que no skipped los test debo de incluir aserciones
  //en casos puntuales, siendo más estricta la escritura
  public registroForm!: FormGroup;

  ngOnInit(): void {

    this.sesionService.controlBtnSesion(true);

    this.registroForm = this.formBuilder.group({

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
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*"?&])([A-Za-z\d$@$!%*"?&]|[^ ]){8,15}$/)
      ]
    ],
    });

  }

  enviar(){
    //ENVIAR A LA BBDD, ASIGNAR A LA SESION Y REDIRECCIONAR

    this.restService.post('http://localhost:80/backendAngular/login.php',this.registroForm.value).subscribe((respuesta: any) => {
      
      if(respuesta !== 'Contraseña erronea' && respuesta !== 'Email erroneo'){

        this.sesionService.iniciarSesion(respuesta);
        location.href = "/home";
        //this.router.navigate(['/','home']);

      }else{

        let formulario = document.getElementsByTagName("form")[0];
        let div = document.createElement("div");
        let texto = document.createTextNode(respuesta);

        div.setAttribute("id","errorLogin");
        div.appendChild(texto);
        formulario.appendChild(div);

      }
    
    });


  }

}
