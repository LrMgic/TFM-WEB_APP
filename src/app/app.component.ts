import { Component } from '@angular/core';
import { HeaderMenus } from './user/Models/identification-status.dto';
import { NavbarMenus } from './user/Models/navbar-menus.dto';
import { HeaderMenusService } from './user/Services/header-menus.service';
import { LocalStorageService } from './user/Services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TFM-WEB_APP';

  showNoIdentifieSection: boolean;
  showWorkerSection: boolean;
  showClientSection: boolean;

  alias: string | null;

  constructor(
    private headerService: HeaderMenusService,
    private localStorageService: LocalStorageService
  ) {
    this.showNoIdentifieSection = true;
    this.showWorkerSection = false;
    this.showClientSection = false;
    this.alias = '';
  }

  ngOnInit(): void {
    this.localStorageService.remove('user_id');
    this.localStorageService.remove('access_token');
    this.localStorageService.remove('userrol');
    this.localStorageService.remove('alias');

    const workerInfo: HeaderMenus = {
      showNoIdentifieSection: true,
      showWorkerSection: false,
      showClientSection: false,
    };

    this.headerService.headerManagement.next(workerInfo);
  }
}
