import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkListComponent } from './dk-list.component';

describe('DkListComponent', () => {
  let component: DkListComponent;
  let fixture: ComponentFixture<DkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
