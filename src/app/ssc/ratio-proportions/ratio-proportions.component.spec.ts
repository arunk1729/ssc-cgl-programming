import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatioProportionsComponent } from './ratio-proportions.component';

describe('RatioProportionsComponent', () => {
  let component: RatioProportionsComponent;
  let fixture: ComponentFixture<RatioProportionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatioProportionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatioProportionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
