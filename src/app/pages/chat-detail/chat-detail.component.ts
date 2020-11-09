import { Component, OnInit } from '@angular/core';
import { ChuckNorrisService } from 'src/app/core/services/chuk-norris/chuck-norris.service';
import { DataSharingService } from 'src/app/core/services/data-sharing.service';
import { Contact, Message } from '../contact';
// import { contacts } from '../contacts';
import { NorrisResponse } from '../norris'

@Component({
  selector: 'home-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.scss']
})
export class ChatDetailComponent implements OnInit {
  id: number;
  newMessage: string;
  messagesData: Contact[];
  currentData: Contact ;
  messages: Message[];
  constructor(private dataSharingService: DataSharingService, private chuckNorrisService: ChuckNorrisService) { }

  ngOnInit() {
    this.handleMessagesData();
    this.submitOnEnterButton();
    this.dataSharingService.chatIdSubjectObservable().subscribe((id: number)=>{
      this.id = id;
      console.log(this.messagesData[id])
      this.currentData = this.messagesData[id];
      // this.messages = this.sortMessages(this.currentData.messages);
         this.messages = this.currentData.messages;

      console.log(this.currentData.messages)
    })
    
  }

  handleMessagesData() {
    this.messagesData = JSON.parse(localStorage.getItem('contacts'));
  }

  sortMessages(value: Message[]) {
    const sortedValues = value.sort((a, b) => {
      var dateA = a.creationDate; 
      var dateB = b.creationDate;
      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
      return 0;
    });
    return sortedValues;
  }

  submit() {
    if(this.id === null || this.id === undefined || this.newMessage === ''|| this.newMessage === undefined|| this.newMessage === null) {
      return;
    }
    const newMessage: Message = {message: this.newMessage, creationDate: new Date().getTime(), isMine: true};
    this.messagesData[this.id].messages.push(newMessage);
    localStorage.setItem('contacts', JSON.stringify(this.messagesData));
    this.dataSharingService.emitRefreshChatsSubject(true);
    this.newMessage = '';
    this.chuckNorrisService.getMessage().subscribe((data:NorrisResponse)=> {
      console.log(data);
      const newMessage: Message = {message: data.value, creationDate: new Date(data.created_at).getTime(), isMine: false};
      setTimeout(() => {
        this.messagesData[this.id].messages.push(newMessage);
        localStorage.setItem('contacts', JSON.stringify(this.messagesData))
        this.dataSharingService.emitRefreshChatsSubject(true);
      },5000);
    });
    // console.log('qweqweqwe', this.newMessage)
  }

  submitOnEnterButton() {
    window.addEventListener("keydown", (event) => {
   if(event.code === 'Enter') {
     this.submit()
   }
    }, true)
  }
}
