import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCochesComponent } from './form-coches.component';

describe('FormCochesComponent', () => {
  let component: FormCochesComponent;
  let fixture: ComponentFixture<FormCochesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCochesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
