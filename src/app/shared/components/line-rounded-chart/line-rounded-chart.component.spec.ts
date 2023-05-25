import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineRoundedChartComponent } from './line-rounded-chart.component';

describe('LineRoundedChartComponent', () => {
  let component: LineRoundedChartComponent;
  let fixture: ComponentFixture<LineRoundedChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineRoundedChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineRoundedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
