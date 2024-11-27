import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicedetailsComponent } from './servicedetails.component';

describe('ServicedetailsComponent', () => {
  let component: ServicedetailsComponent;
  let fixture: ComponentFixture<ServicedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicedetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
