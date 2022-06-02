import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../../user/Services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TreballadorGuard implements CanActivate {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userrol = this.localStorageService.get('userrol');
    if (userrol === 'Treballador') {
      // logged in so return true
      return true;
    }


    this.router.navigate(['']);

    return false;
  }
}
