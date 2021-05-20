import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
//REALIZADO POR ngx-cookie-service REALIZADON CON SESIONES AHORA
import { SesionService } from "../services/sesion.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class VigilanteGuard implements CanActivate {
  //si devuelve false ni siquiera te deja hacer click 

  constructor(private sesionService: SesionService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      //EN ENTORNOS REALES DE PRODUCCION SE DEBE DE REALIZAR UNA PETICION AL SERVER PARA SABER SI ES CORRECTA LA SESION
      const sesion = this.sesionService.devuelveNombreSesion();

      if(sesion === null){

        this.router.navigate(['/','sesion']);

        return false;
      }

    return true;
  }
  
}
