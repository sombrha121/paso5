import { Component } from '@angular/core';
import { MessageService } from '../message.service'; // Importamos el servicio MessageService

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  constructor(public messageService: MessageService) { } 
  // Inyectamos el servicio MessageService en el constructor. La propiedad messageService es pública.

}




/*
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

  clear() { // añadimo el boton de limpiar 
    this.messageService.clear();
  }
}
*/