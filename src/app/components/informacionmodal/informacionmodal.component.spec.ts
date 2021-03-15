import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionmodalComponent } from './informacionmodal.component';

describe('InformacionmodalComponent', () => {
  let component: InformacionmodalComponent;
  let fixture: ComponentFixture<InformacionmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
