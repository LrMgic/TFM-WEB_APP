import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LacervesaComponent } from './lacervesa.component';

describe('LacervesaComponent', () => {
  let component: LacervesaComponent;
  let fixture: ComponentFixture<LacervesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LacervesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LacervesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
