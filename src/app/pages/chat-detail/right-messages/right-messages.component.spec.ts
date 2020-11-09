import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightMessagesComponent } from './right-messages.component';

describe('RightMessagesComponent', () => {
  let component: RightMessagesComponent;
  let fixture: ComponentFixture<RightMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
