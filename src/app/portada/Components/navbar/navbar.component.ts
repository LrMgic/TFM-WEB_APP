import { Component, HostListener, OnInit } from '@angular/core';
import { NavbarMenus } from 'src/app/user/Models/navbar-menus.dto';
import { NavbarService } from 'src/app/user/Services/navbar.service';

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
  navbarfixed: boolean = false;

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 100) {
      this.navbarfixed = true;
    } else {
      this.navbarfixed = false;
    }
  }

  constructor(private navbarService: NavbarService) {
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
}
