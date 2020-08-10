import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelandConcurrencyComponent } from './paralleland-concurrency.component';

describe('ParallelandConcurrencyComponent', () => {
  let component: ParallelandConcurrencyComponent;
  let fixture: ComponentFixture<ParallelandConcurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallelandConcurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallelandConcurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
