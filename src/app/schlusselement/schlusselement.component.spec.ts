import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchlusselementComponent } from './schlusselement.component';

describe('SchlusselementComponent', () => {
  let component: SchlusselementComponent;
  let fixture: ComponentFixture<SchlusselementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchlusselementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchlusselementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
