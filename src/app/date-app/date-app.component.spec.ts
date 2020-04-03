import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateAppComponent } from './date-app.component';

describe('DateAppComponent', () => {
  let component: DateAppComponent;
  let fixture: ComponentFixture<DateAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
