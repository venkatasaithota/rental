import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourselComponent } from './coursel.component';

describe('CourselComponent', () => {
  let component: CourselComponent;
  let fixture: ComponentFixture<CourselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
