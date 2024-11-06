import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalsAboutComponent } from './finals-about.component';

describe('FinalsAboutComponent', () => {
  let component: FinalsAboutComponent;
  let fixture: ComponentFixture<FinalsAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalsAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
