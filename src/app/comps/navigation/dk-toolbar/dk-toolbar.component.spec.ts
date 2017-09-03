import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkToolbarComponent } from './dk-toolbar.component';

describe('DkToolbarComponent', () => {
  let component: DkToolbarComponent;
  let fixture: ComponentFixture<DkToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
