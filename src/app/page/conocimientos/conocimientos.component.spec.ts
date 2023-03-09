import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConocimientosComponent } from './conocimientos.component';

describe('ConocimientosComponent', () => {
  let component: ConocimientosComponent;
  let fixture: ComponentFixture<ConocimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConocimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
