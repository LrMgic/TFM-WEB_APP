import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaiClientComponent } from './espai-client.component';

describe('EspaiClientComponent', () => {
  let component: EspaiClientComponent;
  let fixture: ComponentFixture<EspaiClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaiClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaiClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
