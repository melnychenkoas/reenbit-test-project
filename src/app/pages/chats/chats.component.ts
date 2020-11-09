import { Component, OnChanges, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/core/services/data-sharing.service';
import { Contact } from '../contact';
import { contacts } from '../contacts';

@Component({
  selector: 'home-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit, OnChanges {
  messagesData: Contact[];
  constructor(private dataSharingService: DataSharingService) { }

  ngOnInit() {
    console.log(this.messagesData)
    this.setMessagesData();
    this.subscribeToFilteredData();
    this.subscribeToPageRefresh();
  }
  ngOnChanges(){
    console.log('qwe');
  }

  subscribeToPageRefresh() {
    this.dataSharingService.refreshChatsSubjectObservable().subscribe((data: Boolean) => {
      console.log('data ', data)
      if (data !== true) {
        return;
      }
      this.setMessagesData();
    })
  }

  showChat(id: number){
    this.dataSharingService.emitChatIdSubject(id);
  }

  setMessagesData(){
    this.messagesData = JSON.parse(localStorage.getItem('contacts'));
  }

  subscribeToFilteredData() {
    this.dataSharingService.filteredDataSubjectObservable().subscribe((filteredData: Contact[]) => {
      if (!filteredData) {
        return;
      }
      this.messagesData = filteredData;
    })
  }
}
