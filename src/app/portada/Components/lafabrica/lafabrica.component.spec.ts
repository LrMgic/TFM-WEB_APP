import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LafabricaComponent } from './lafabrica.component';

describe('LafabricaComponent', () => {
  let component: LafabricaComponent;
  let fixture: ComponentFixture<LafabricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LafabricaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LafabricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
