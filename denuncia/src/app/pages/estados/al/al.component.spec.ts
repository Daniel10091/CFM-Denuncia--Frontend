import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALComponent } from './al.component';

describe('ALComponent', () => {
  let component: ALComponent;
  let fixture: ComponentFixture<ALComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ALComponent]
    });
    fixture = TestBed.createComponent(ALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
