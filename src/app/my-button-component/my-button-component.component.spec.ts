import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyButtonComponentComponent } from './my-button-component.component';

describe('MyButtonComponentComponent', () => {
  let component: MyButtonComponentComponent;
  let fixture: ComponentFixture<MyButtonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyButtonComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
