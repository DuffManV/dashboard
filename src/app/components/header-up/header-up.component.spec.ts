import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUpComponent } from './header-up.component';

describe('HeaderComponent', () => {
  let component: HeaderUpComponent;
  let fixture: ComponentFixture<HeaderUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderUpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
