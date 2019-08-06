import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DopaymentComponent } from './dopayment.component';

describe('DopaymentComponent', () => {
  let component: DopaymentComponent;
  let fixture: ComponentFixture<DopaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DopaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DopaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
