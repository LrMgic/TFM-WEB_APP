import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduccioComponent } from './produccio.component';

describe('ProduccioComponent', () => {
  let component: ProduccioComponent;
  let fixture: ComponentFixture<ProduccioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduccioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduccioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
