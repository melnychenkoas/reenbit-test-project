import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Contact } from 'src/app/pages/contact';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private chatIdSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private filteredDataSubject: Subject<Contact[]> = new Subject<Contact[]>();
  private refreshChatsSubject: Subject<boolean> = new Subject<boolean>();
  constructor() { }

  emitChatIdSubject(id: number) {
    this.chatIdSubject.next(id);
  }

  chatIdSubjectObservable(): Observable<number> {
    return this.chatIdSubject.asObservable();
  }

  emitFilteredDataSubject(contacts: Contact[]) {
    this.filteredDataSubject.next(contacts);
  }

  filteredDataSubjectObservable(): Observable<Contact[]> {
    return this.filteredDataSubject.asObservable();
  }

  emitRefreshChatsSubject(isRefreshRequired: boolean) {
    this.refreshChatsSubject.next(isRefreshRequired);
  }

  refreshChatsSubjectObservable(): Observable<boolean> {
    return this.refreshChatsSubject.asObservable();
  }
}
