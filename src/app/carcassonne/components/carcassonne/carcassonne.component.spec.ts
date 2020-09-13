import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarcassonneComponent } from './carcassonne.component';

describe('CarcassonneComponent', () => {
  let component: CarcassonneComponent;
  let fixture: ComponentFixture<CarcassonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarcassonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarcassonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
