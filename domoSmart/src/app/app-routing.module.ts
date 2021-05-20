import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { Error404Component } from "./components/error404/error404.component";
import { LoginComponent } from "./components/login/login.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { AcercaComponent } from "./components/acerca/acerca.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { VigilanteGuard } from './guards/vigilante.guard';
import { VigilanteLoginRegistroGuard } from "./guards/vigilante-login-registro.guard";

const routes: Routes = [
  { 
    path: '', component: HomeComponent 
  },
  { 
    path: 'home', component: HomeComponent 
  },
  { 
    path: 'domotica', component: ProductosComponent, canActivate: [VigilanteGuard]
  },
  { 
    path: 'smartHome', component: ProductosComponent, canActivate: [VigilanteGuard] 
  },
  { 
    path: 'sesion', component: LoginComponent, canActivate: [VigilanteLoginRegistroGuard]
  },
  { 
    path: 'acerca', component: AcercaComponent, canActivate: [VigilanteGuard] //Protegida Solo tienen acceso los usuarios logueados
  },
  { 
    path: 'crear', component: RegistroComponent, canActivate: [VigilanteLoginRegistroGuard]
  },
  { 
    path: '**', component: Error404Component 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
