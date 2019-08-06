import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhomtoletComponent } from './whomtolet.component';

describe('WhomtoletComponent', () => {
  let component: WhomtoletComponent;
  let fixture: ComponentFixture<WhomtoletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhomtoletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhomtoletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
