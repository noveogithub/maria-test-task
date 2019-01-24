import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('NotificationComponentComponent', () => {
  let component: NotificationComponentComponent;
  let fixture: ComponentFixture<NotificationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationComponentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
