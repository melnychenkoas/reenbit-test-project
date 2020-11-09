import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { HeaderComponent } from './pages/header/header.component';
import { ContactSearchComponent } from './pages/contact-search/contact-search.component';
import { ChatDetailComponent } from './pages/chat-detail/chat-detail.component';
import { RightMessagesComponent } from './pages/chat-detail/right-messages/right-messages.component';
import { LeftMessagesComponent } from './pages/chat-detail/left-messages/left-messages.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatsComponent,
    HeaderComponent,
    ContactSearchComponent,
    ChatDetailComponent,
    RightMessagesComponent,
    LeftMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
