import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../contact';

@Component({
  selector: 'app-left-messages',
  templateUrl: './left-messages.component.html',
  styleUrls: ['./left-messages.component.scss']
})
export class LeftMessagesComponent implements OnInit {
  @Input() icon: string;
  @Input() message: Message;

  constructor() { }

  ngOnInit() {
  }

}
