import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() {}

  messageOk(title: string, message: string) {
    console.log('messageOk', { title: title, message: message });
  }

  messageError(title: string, message: string) {
    console.error('messageError', { title: title, message: message });
  }
}
