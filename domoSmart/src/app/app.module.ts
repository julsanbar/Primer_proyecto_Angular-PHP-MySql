import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsuarioActualPipe } from './pipes/usuario-actual.pipe';
import { Error404Component } from './components/error404/error404.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { SesionService } from "./services/sesion.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Paquete: https://github.com/ngneat/error-tailor
import { ErrorTailorModule } from "@ngneat/error-tailor";
/*******************************************************/
import { HttpClientModule } from "@angular/common/http";
import { RestService } from "./services/rest.service";
import { ProductosComponent } from './components/productos/productos.component';
import { EuroPipe } from './pipes/euro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UsuarioActualPipe,
    Error404Component,
    LoginComponent,
    RegistroComponent,
    AcercaComponent,
    ProductosComponent,
    EuroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    //Aqui se definen los mensajes de errores por defecto que nos saldrán
    //por pantalla si no le definimos un mensaje en el input correspondiente
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Campo requerido',
          minlength: ({ requiredLength, actualLength }) => 
                      `Expect ${requiredLength} but got ${actualLength}`,
          invalidAddress: error => `Address isn't valid`
        }
      }
    }),
    HttpClientModule
  ],
  providers: [
    SesionService,
    RestService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
