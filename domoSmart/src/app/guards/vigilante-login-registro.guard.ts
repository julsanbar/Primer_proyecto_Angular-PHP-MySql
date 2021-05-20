import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from "../services/sesion.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class VigilanteLoginRegistroGuard implements CanActivate {
 
  constructor(private sesionService: SesionService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const sesion = this.sesionService.devuelveNombreSesion();

      if(sesion !== null){

        this.router.navigate(['/','home']);

        return false;
      }

    return true;
  }
  
}
