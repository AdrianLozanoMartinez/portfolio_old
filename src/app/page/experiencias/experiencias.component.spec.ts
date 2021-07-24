import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciasComponent } from './experiencias.component';

describe('ExperienciasComponent', () => {
  let component: ExperienciasComponent;
  let fixture: ComponentFixture<ExperienciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
