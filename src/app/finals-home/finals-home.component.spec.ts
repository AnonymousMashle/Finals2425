import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalsHomeComponent } from './finals-home.component';

describe('FinalsHomeComponent', () => {
  let component: FinalsHomeComponent;
  let fixture: ComponentFixture<FinalsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalsHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
