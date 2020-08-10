import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequencesResultsComponent } from './sequences-results.component';

describe('SequencesResutlsComponent', () => {
  let component: SequencesResultsComponent;
  let fixture: ComponentFixture<SequencesResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequencesResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequencesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
