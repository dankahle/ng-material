import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FxGridComponent } from './fx-grid.component';

describe('FxGridComponent', () => {
  let component: FxGridComponent;
  let fixture: ComponentFixture<FxGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FxGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FxGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
