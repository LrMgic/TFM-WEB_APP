import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderMenus } from '../../Models/identification-status.dto';
import { HeaderMenusService } from '../../Services/header-menus.service';
import { LocalStorageService } from '../../Services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showNoIdentifieSection: boolean;
  showWorkerSection: boolean;
  showClientSection: boolean;

  alias: string | null;
  private userrol: string | null;

  constructor(
    private router: Router,
    private headerService: HeaderMenusService,
    private localStorageService: LocalStorageService
  ) {
    this.showNoIdentifieSection = true;
    this.showWorkerSection = false;
    this.showClientSection = false;
    this.alias = '';
    this.userrol = '';
  }

  ngOnInit(): void {
    this.headerService.headerManagement.subscribe((headerInfo: HeaderMenus) => {
      if (headerInfo) {
        this.alias = this.localStorageService.get('alias');
        this.userrol = this.localStorageService.get('userrol');
        this.showNoIdentifieSection = headerInfo.showNoIdentifieSection;
        this.showClientSection = headerInfo.showClientSection;
        this.showWorkerSection = headerInfo.showWorkerSection;
      }
    });
  }

  logout(): void {
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

    this.router.navigateByUrl('');
  }
}
