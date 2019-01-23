import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallProfileComponent } from './call-profile.component';

describe('CallProfileComponent', () => {
  let component: CallProfileComponent;
  let fixture: ComponentFixture<CallProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
