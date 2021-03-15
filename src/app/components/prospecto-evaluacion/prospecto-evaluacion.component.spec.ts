import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectoEvaluacionComponent } from './prospecto-evaluacion.component';

describe('ProspectoEvaluacionComponent', () => {
  let component: ProspectoEvaluacionComponent;
  let fixture: ComponentFixture<ProspectoEvaluacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectoEvaluacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectoEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
