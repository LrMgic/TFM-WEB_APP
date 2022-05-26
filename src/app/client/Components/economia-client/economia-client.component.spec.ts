import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomiaClientComponent } from './economia-client.component';

describe('EconomiaClientComponent', () => {
  let component: EconomiaClientComponent;
  let fixture: ComponentFixture<EconomiaClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomiaClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomiaClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
