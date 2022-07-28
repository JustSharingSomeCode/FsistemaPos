import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesComponentComponent } from './invoices-component.component';

describe('InvoicesComponentComponent', () => {
  let component: InvoicesComponentComponent;
  let fixture: ComponentFixture<InvoicesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
