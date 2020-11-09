import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMessagesComponent } from './left-messages.component';

describe('LeftMessagesComponent', () => {
  let component: LeftMessagesComponent;
  let fixture: ComponentFixture<LeftMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
