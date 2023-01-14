import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPartShopMainPageComponent } from './car-part-shop-main-page.component';

describe('CarPartShopMainPageComponent', () => {
  let component: CarPartShopMainPageComponent;
  let fixture: ComponentFixture<CarPartShopMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarPartShopMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarPartShopMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
