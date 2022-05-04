import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaTreballadorComponent } from './portada-treballador.component';

describe('PortadaTreballadorComponent', () => {
  let component: PortadaTreballadorComponent;
  let fixture: ComponentFixture<PortadaTreballadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortadaTreballadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortadaTreballadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
