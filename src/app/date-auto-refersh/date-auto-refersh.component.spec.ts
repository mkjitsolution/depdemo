import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateAutoRefershComponent } from './date-auto-refersh.component';

describe('DateAutoRefershComponent', () => {
  let component: DateAutoRefershComponent;
  let fixture: ComponentFixture<DateAutoRefershComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateAutoRefershComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateAutoRefershComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
