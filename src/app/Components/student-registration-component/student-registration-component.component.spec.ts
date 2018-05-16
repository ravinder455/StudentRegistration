import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegistrationComponentComponent } from './student-registration-component.component';

describe('StudentRegistrationComponentComponent', () => {
  let component: StudentRegistrationComponentComponent;
  let fixture: ComponentFixture<StudentRegistrationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRegistrationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegistrationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
