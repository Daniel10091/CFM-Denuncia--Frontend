import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UfSeletionComponent } from './uf-seletion.component';

describe('UfSeletionComponent', () => {
  let component: UfSeletionComponent;
  let fixture: ComponentFixture<UfSeletionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UfSeletionComponent]
    });
    fixture = TestBed.createComponent(UfSeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
