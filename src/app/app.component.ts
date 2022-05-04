import { Component } from '@angular/core';
import { HeaderMenus } from './user/Models/identification-status.dto';
import { NavbarMenus } from './user/Models/navbar-menus.dto';
import { HeaderMenusService } from './user/Services/header-menus.service';
import { LocalStorageService } from './user/Services/local-storage.service';
import { NavbarService } from './user/Services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TFM-WEB_APP';

  showClientSection: boolean;
  showNoClientSection: boolean;
  showWorkerSection: boolean;
  showNoWorkerSection: boolean;

  alias: string | null;

  constructor(
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
  }
}
