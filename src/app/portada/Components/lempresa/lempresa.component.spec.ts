import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LempresaComponent } from './lempresa.component';

describe('LempresaComponent', () => {
  let component: LempresaComponent;
  let fixture: ComponentFixture<LempresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LempresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
