import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactaComponent } from './contacta.component';

describe('ContactaComponent', () => {
  let component: ContactaComponent;
  let fixture: ComponentFixture<ContactaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
