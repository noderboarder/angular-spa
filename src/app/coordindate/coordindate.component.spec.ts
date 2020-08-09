import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordindateComponent } from './coordindate.component';

describe('CoordindateComponent', () => {
  let component: CoordindateComponent;
  let fixture: ComponentFixture<CoordindateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordindateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordindateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
