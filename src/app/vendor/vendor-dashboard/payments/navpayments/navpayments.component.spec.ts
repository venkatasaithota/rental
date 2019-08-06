import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavpaymentsComponent } from './navpayments.component';

describe('NavpaymentsComponent', () => {
  let component: NavpaymentsComponent;
  let fixture: ComponentFixture<NavpaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavpaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavpaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
