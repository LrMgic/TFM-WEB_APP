import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-treballador',
  templateUrl: './navbar-treballador.component.html',
  styleUrls: ['./navbar-treballador.component.scss']
})
export class NavbarTreballadorComponent implements OnInit {
  navbarfixed: boolean = false;

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 100) {
      this.navbarfixed = true;
    } else {
      this.navbarfixed = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
