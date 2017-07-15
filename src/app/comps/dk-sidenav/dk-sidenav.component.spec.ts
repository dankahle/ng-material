import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkSidenavComponent } from './dk-sidenav.component';

describe('DkSidenavComponent', () => {
  let component: DkSidenavComponent;
  let fixture: ComponentFixture<DkSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
