import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SscMainComponent } from './ssc-main.component';

describe('SscMainComponent', () => {
  let component: SscMainComponent;
  let fixture: ComponentFixture<SscMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SscMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SscMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
