import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AMComponent } from './am.component';

describe('AMComponent', () => {
  let component: AMComponent;
  let fixture: ComponentFixture<AMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AMComponent]
    });
    fixture = TestBed.createComponent(AMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
