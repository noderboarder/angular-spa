import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsforseqsComponent } from './paramsforseqs.component';

describe('ParamsforseqsComponent', () => {
  let component: ParamsforseqsComponent;
  let fixture: ComponentFixture<ParamsforseqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamsforseqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamsforseqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
