import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimentComponent } from './seguiment.component';

describe('SeguimentComponent', () => {
  let component: SeguimentComponent;
  let fixture: ComponentFixture<SeguimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguimentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
