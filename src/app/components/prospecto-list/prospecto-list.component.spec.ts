import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectoListComponent } from './prospecto-list.component';

describe('ProspectoListComponent', () => {
  let component: ProspectoListComponent;
  let fixture: ComponentFixture<ProspectoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
