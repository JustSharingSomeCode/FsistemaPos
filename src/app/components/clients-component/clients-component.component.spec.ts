import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsComponentComponent } from './clients-component.component';

describe('ClientsComponentComponent', () => {
  let component: ClientsComponentComponent;
  let fixture: ComponentFixture<ClientsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
