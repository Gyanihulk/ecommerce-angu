import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductDateComponent } from './view-product-date.component';

describe('ViewProductDateComponent', () => {
  let component: ViewProductDateComponent;
  let fixture: ComponentFixture<ViewProductDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
