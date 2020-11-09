import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/core/services/data-sharing.service';
import { Contact } from '../contact';

@Component({
  selector: 'home-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.scss']
})
export class ContactSearchComponent implements OnInit {
  searchData: string;
  messagesData: Contact[];
  constructor(private dataSharingService: DataSharingService) { }

  ngOnInit() {
    this.handleMessagesData();
  }
  handleMessagesData() {
    this.messagesData = JSON.parse(localStorage.getItem('contacts'));
  }
  filterMessagesData(searchData: string){
   const filteredData =  this.messagesData.filter((contact: Contact)=>contact.name.toLowerCase().includes(searchData))
    this.dataSharingService.emitFilteredDataSubject(filteredData);
  }
}
