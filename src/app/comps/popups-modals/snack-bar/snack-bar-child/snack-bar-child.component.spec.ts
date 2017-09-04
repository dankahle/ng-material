import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarChildComponent } from './snack-bar-child.component';

describe('SnackBarChildComponent', () => {
  let component: SnackBarChildComponent;
  let fixture: ComponentFixture<SnackBarChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackBarChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
