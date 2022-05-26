import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaExtensComponent } from './noticia-extens.component';

describe('NoticiaExtensComponent', () => {
  let component: NoticiaExtensComponent;
  let fixture: ComponentFixture<NoticiaExtensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaExtensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaExtensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
