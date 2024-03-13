import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciaComponent } from './denuncia.component';

describe('DenunciaComponent', () => {
  let component: DenunciaComponent;
  let fixture: ComponentFixture<DenunciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DenunciaComponent]
    });
    fixture = TestBed.createComponent(DenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
