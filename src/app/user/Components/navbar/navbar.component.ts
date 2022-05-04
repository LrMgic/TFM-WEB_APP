import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarMenus } from 'src/app/user/Models/navbar-menus.dto';
import { LocalStorageService } from 'src/app/user/Services/local-storage.service';
import { NavbarService } from 'src/app/user/Services/navbar.service';
import { HeaderMenusService } from '../../Services/header-menus.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showClientSection: boolean;
  showNoClientSection: boolean;
  showWorkerSection: boolean;
  showNoWorkerSection: boolean;

  constructor(
    private router: Router,
    private navbarService: NavbarService,
    private headerService: HeaderMenusService,
    private localStorageService: LocalStorageService
  ) {
    this.showClientSection = false;
    this.showNoClientSection = true;
    this.showWorkerSection = false;
    this.showNoWorkerSection = true;
  }

  ngOnInit(): void {
    this.navbarService.navbarManagement.subscribe((navbarInfo: NavbarMenus) => {
      if (navbarInfo) {
        this.showClientSection = navbarInfo.showClientSection;
        this.showNoClientSection = navbarInfo.showNoClientSection;
      }
    });
  }

  home(): void {
    this.router.navigateByUrl('portada/home');
  }

  empresa(): void {
    this.router.navigateByUrl('portada/empresa');
  }

  quiSom(): void {
    this.router.navigateByUrl('portada/empresa/quiSom');
  }

  eCommers(): void {
    this.router.navigateByUrl('portada/empresa/eCommers');
  }

  elsPreus(): void {
    this.router.navigateByUrl('portada/empresa/elsPreus');
  }

  onSomE(): void {
    this.router.navigateByUrl('portada/empresa/onSomE');
  }

  perqueUnirse(): void {
    this.router.navigateByUrl('portada/empresa/perqueUnirse');
  }

  contacta(): void {
    this.router.navigateByUrl('portada/contacta');
  }

  laFabrica(): void {
    this.router.navigateByUrl('portada/laFabrica');
  }

  onSomF(): void {
    this.router.navigateByUrl('portada/laFabrica.onSomF');
  }

  elProces(): void {
    this.router.navigateByUrl('portada/laFabrica.elProces');
  }

  laCervesa(): void {
    this.router.navigateByUrl('portada/laCervesa');
  }
  cervesesPopulars(): void {
    this.router.navigateByUrl('portada/cervesesPopulars');
  }

  repComanda(): void {
    this.router.navigateByUrl('portada/repComanda');
  }

  receptes(): void {
    this.router.navigateByUrl('portada/receptes');
  }

  ingredients(): void {
    this.router.navigateByUrl('portada/ingredients');
  }

  col_labora(): void {
    this.router.navigateByUrl('portada/col_labora');
  }

  tasques(): void {
    this.router.navigateByUrl('portada/tasques');
  }
}
