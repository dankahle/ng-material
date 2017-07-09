import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkMenuComponent } from './dk-menu.component';

describe('DkMenuComponent', () => {
  let component: DkMenuComponent;
  let fixture: ComponentFixture<DkMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
