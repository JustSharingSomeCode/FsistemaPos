import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesComponentComponent } from './sales-component.component';

describe('SalesComponentComponent', () => {
  let component: SalesComponentComponent;
  let fixture: ComponentFixture<SalesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
