import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkCardComponent } from './dk-card.component';

describe('DkCardComponent', () => {
  let component: DkCardComponent;
  let fixture: ComponentFixture<DkCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
