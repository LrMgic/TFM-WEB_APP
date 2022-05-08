import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderMenus } from '../../Models/identification-status.dto';
import { NavbarMenus } from '../../Models/navbar-menus.dto';
import { HeaderMenusService } from '../../Services/header-menus.service';
import { LocalStorageService } from '../../Services/local-storage.service';
import { NavbarService } from '../../Services/navbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showClientSection: boolean;
  showNoClientSection: boolean;
  showWorkerSection: boolean;
  showNoWorkerSection: boolean;

  alias: string | null;

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
    this.alias = '';
  }

  ngOnInit(): void {
    this.navbarService.navbarManagement.subscribe((navbarInfo: NavbarMenus) => {
      if (navbarInfo) {
        this.showClientSection = navbarInfo.showClientSection;
        this.showNoClientSection = navbarInfo.showNoClientSection;
        this.alias = this.localStorageService.get('alias');
      }
    });
    this.headerService.headerManagement.subscribe((headerInfo: HeaderMenus) => {
      if (headerInfo) {
        this.showWorkerSection = headerInfo.showWorkerSection;
        this.showNoWorkerSection = headerInfo.showNoWorkerSection;
      }
    });
  }

  logout(): void {
    this.localStorageService.remove('user_id');
    this.localStorageService.remove('access_token');
    this.localStorageService.remove('userrol');
    this.localStorageService.remove('alias');

    const navbarInfo: NavbarMenus = {
      showClientSection: false,
      showNoClientSection: true,
    };

    const workerInfo: HeaderMenus = {
      showWorkerSection: false,
      showNoWorkerSection: true,
    };

    this.navbarService.navbarManagement.next(navbarInfo);
    this.headerService.headerManagement.next(workerInfo);

    this.router.navigateByUrl('');
  }
}
