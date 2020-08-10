import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskOptionComponent } from './mask-option.component';

describe('MaskoptionComponent', () => {
  let component: MaskOptionComponent;
  let fixture: ComponentFixture<MaskOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaskOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
