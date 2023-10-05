import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractiseDropdownComponent } from './practise-dropdown.component';

describe('PractiseDropdownComponent', () => {
  let component: PractiseDropdownComponent;
  let fixture: ComponentFixture<PractiseDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractiseDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractiseDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
