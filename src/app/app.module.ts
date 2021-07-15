import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { BackgroundComponent } from './background/background.component';
import { ChatBackgroundComponent } from './chat-background/chat-background.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    ChatBackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
