import { Component, HostListener, OnInit } from '@angular/core';
import { HeaderMenus } from 'src/app/user/Models/identification-status.dto';
import { HeaderMenusService } from 'src/app/user/Services/header-menus.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showNoIdentifieSection: boolean;
  showWorkerSection: boolean;
  showClientSection: boolean;
  navbarfixed: boolean = false;

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 100) {
      this.navbarfixed = true;
    } else {
      this.navbarfixed = false;
    }
  }

  constructor(private headerService: HeaderMenusService) {
    this.showNoIdentifieSection = true;
    this.showWorkerSection = false;
    this.showClientSection = false;
  }

  ngOnInit(): void {
    this.headerService.headerManagement.subscribe((headerInfo: HeaderMenus) => {
      if (headerInfo) {
        this.showNoIdentifieSection = headerInfo.showNoIdentifieSection;
        this.showClientSection = headerInfo.showClientSection;
        this.showWorkerSection = headerInfo.showWorkerSection;
      }
    });
  }

  onActivate() {
    window.scrollTo(0, 0);
  }
}
