import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskoptionComponent } from './maskoption.component';

describe('MaskoptionComponent', () => {
  let component: MaskoptionComponent;
  let fixture: ComponentFixture<MaskoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaskoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
