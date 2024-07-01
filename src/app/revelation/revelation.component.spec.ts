import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevelationComponent } from './revelation.component';

describe('RevelationComponent', () => {
  let component: RevelationComponent;
  let fixture: ComponentFixture<RevelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevelationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
