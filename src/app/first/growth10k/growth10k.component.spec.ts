import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Growth10kComponent } from './growth10k.component';

describe('Growth10kComponent', () => {
  let component: Growth10kComponent;
  let fixture: ComponentFixture<Growth10kComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Growth10kComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Growth10kComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
