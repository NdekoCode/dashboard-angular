import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalAvgDataComponent } from './global-avg-data.component';

describe('GlobalAvgDataComponent', () => {
  let component: GlobalAvgDataComponent;
  let fixture: ComponentFixture<GlobalAvgDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalAvgDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalAvgDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
