import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerPhoneComponent } from './seller-phone.component';

describe('SellerPhoneComponent', () => {
  let component: SellerPhoneComponent;
  let fixture: ComponentFixture<SellerPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerPhoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
