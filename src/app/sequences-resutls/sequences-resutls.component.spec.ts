import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequencesResutlsComponent } from './sequences-resutls.component';

describe('SequencesResutlsComponent', () => {
  let component: SequencesResutlsComponent;
  let fixture: ComponentFixture<SequencesResutlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequencesResutlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequencesResutlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
