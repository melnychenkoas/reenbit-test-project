import { Component, OnInit } from '@angular/core';
import { contacts } from '../contacts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(!localStorage.getItem('contacts')) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

}
