import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BareChartComponent } from './bare-chart.component';

describe('BareChartComponent', () => {
  let component: BareChartComponent;
  let fixture: ComponentFixture<BareChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BareChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BareChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
