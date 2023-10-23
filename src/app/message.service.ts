import { Injectable } from '@angular/core';

@Injectable({ // paso 4 
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = []; // Almacena mensajes en una matriz

  add(message: string) {
    this.messages.push(message); // Agrega un mensaje a la matriz
  }

  clear() {
    this.messages = []; // Borra todos los mensajes
  } 
}
