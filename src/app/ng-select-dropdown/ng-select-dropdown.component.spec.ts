import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSelectDropdownComponent } from './ng-select-dropdown.component';

describe('NgSelectDropdownComponent', () => {
  let component: NgSelectDropdownComponent;
  let fixture: ComponentFixture<NgSelectDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSelectDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSelectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});