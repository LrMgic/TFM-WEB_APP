import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasquesComponent } from './tasques.component';

describe('TasquesComponent', () => {
  let component: TasquesComponent;
  let fixture: ComponentFixture<TasquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
