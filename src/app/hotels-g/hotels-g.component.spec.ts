import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsGComponent } from './hotels-g.component';

describe('HotelsGComponent', () => {
  let component: HotelsGComponent;
  let fixture: ComponentFixture<HotelsGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
