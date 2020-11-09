import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../contact';

@Component({
  selector: 'app-right-messages',
  templateUrl: './right-messages.component.html',
  styleUrls: ['./right-messages.component.scss']
})
export class RightMessagesComponent implements OnInit {
@Input() message: Message;
  constructor() { }

  ngOnInit() {
  }

}
