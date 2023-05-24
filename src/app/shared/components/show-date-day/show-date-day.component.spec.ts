import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDateDayComponent } from './show-date-day.component';

describe('ShowDateDayComponent', () => {
  let component: ShowDateDayComponent;
  let fixture: ComponentFixture<ShowDateDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDateDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDateDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
