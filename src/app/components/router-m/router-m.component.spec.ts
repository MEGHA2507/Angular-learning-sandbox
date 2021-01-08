import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMComponent } from './router-m.component';

describe('RouterMComponent', () => {
  let component: RouterMComponent;
  let fixture: ComponentFixture<RouterMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
