import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprofilesComponent } from './viewprofiles.component';

describe('ViewprofilesComponent', () => {
  let component: ViewprofilesComponent;
  let fixture: ComponentFixture<ViewprofilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewprofilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
