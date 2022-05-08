import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaiPersonalComponent } from './espai-personal.component';

describe('EspaiPersonalComponent', () => {
  let component: EspaiPersonalComponent;
  let fixture: ComponentFixture<EspaiPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaiPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaiPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
