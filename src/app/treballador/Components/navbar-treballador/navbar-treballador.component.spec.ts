import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTreballadorComponent } from './navbar-treballador.component';

describe('NavbarTreballadorComponent', () => {
  let component: NavbarTreballadorComponent;
  let fixture: ComponentFixture<NavbarTreballadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarTreballadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarTreballadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
