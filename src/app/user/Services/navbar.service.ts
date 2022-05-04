import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavbarMenus } from '../Models/navbar-menus.dto';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  navbarManagement: BehaviorSubject<NavbarMenus> =
    new BehaviorSubject<NavbarMenus>({
      showClientSection: false,
      showNoClientSection: true,
    });
}
