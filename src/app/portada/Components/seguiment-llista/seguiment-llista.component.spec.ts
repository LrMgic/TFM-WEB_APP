import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeguimentLlistaComponent } from './seguiment-llista.component';

describe('SeguimentLlistaComponent', () => {
  let component: SeguimentLlistaComponent;
  let fixture: ComponentFixture<SeguimentLlistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeguimentLlistaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimentLlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
