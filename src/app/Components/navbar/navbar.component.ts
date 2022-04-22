import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { NavbarService } from 'src/app/Services/navbar.service';
import { IdenidentificationStatus } from '../../Models/identification-status.dto';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showNoIdentified: boolean;
  showClient: boolean;
  showWorker: boolean;

  constructor(
    private router: Router,
    private navbarService: NavbarService,
    private localStorageService: LocalStorageService
  ) {
    this.showNoIdentified = true;
    this.showClient = false;
    this.showWorker = false;
  }

  ngOnInit(): void {
    this.navbarService.navbarManagement.subscribe(
      (navbarInfo: IdenidentificationStatus) => {
        if (navbarInfo) {
          this.showClient = navbarInfo.showClient;
          this.showWorker = navbarInfo.showWorker;
          this.showNoIdentified = navbarInfo.showNoIdentified;
        }
      }
    );
  }

  home(): void {
    this.router.navigateByUrl('home');
  }

  empresa(): void {
    this.router.navigateByUrl('empresa');
  }

  quiSom(): void {
    this.router.navigateByUrl('empresa.quiSom');
  }

  eCommers(): void {
    this.router.navigateByUrl('empresa.eCommers');
  }

  elsPreus(): void {
    this.router.navigateByUrl('empresa.elsPreus');
  }

  onSomE(): void {
    this.router.navigateByUrl('empresa.onSomE');
  }

  perqueUnirse(): void {
    this.router.navigateByUrl('empresa.perqueUnirse');
  }

  contacta(): void {
    this.router.navigateByUrl('contacta');
  }

  laFabrica(): void {
    this.router.navigateByUrl('laFabrica');
  }

  onSomF(): void {
    this.router.navigateByUrl('laFabrica.onSomF');
  }

  elProces(): void {
    this.router.navigateByUrl('laFabrica.elProces');
  }

  laCervesa(): void {
    this.router.navigateByUrl('laCervesa');
  }

  tasques(): void {
    this.router.navigateByUrl('tasques');
  }

  logout(): void {
    this.localStorageService.remove('user_id');
    this.localStorageService.remove('access_token');

    const navbarInfo: IdenidentificationStatus = {
      showNoIdentified: true,
      showClient: false,
      showWorker: false,
    };

    this.navbarService.navbarManagement.next(navbarInfo);

    this.router.navigateByUrl('home');
  }
}
