import { Component, OnInit } from '@angular/core';
import {Message} from '../Shared/MessageModel';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit {

  incomingMessages: Message[] =
    [
      {
        sender: 'Admin',
        imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/788d6365663791.5afc1d2cc1fde.jpg',
        date: '2021/07/21',
        message: 'Welcome to our chat App',
        readMessage: false
      },
      {
        sender: 'Sandox',
        // tslint:disable-next-line:max-line-length
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7ekuoDtrL5HDt4JpPNjMx9yw6WlRO96pcmmblsxEkH1fjOngZznxxw1wII68zr4p7Qo&usqp=CAU',
        date: '2021/07/21',
        message: 'It is all about the Money',
        readMessage: false
      },
      {
        sender: 'Sandox',
        // tslint:disable-next-line:max-line-length
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7ekuoDtrL5HDt4JpPNjMx9yw6WlRO96pcmmblsxEkH1fjOngZznxxw1wII68zr4p7Qo&usqp=CAU',
        date: '2021/07/21',
        message: 'It is all about the Money',
        readMessage: false
      },
    ];


  constructor() { }

  ngOnInit() {
  }

}
