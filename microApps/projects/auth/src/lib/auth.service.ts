import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private messageSource = new Subject<string>();
  message$ = this.messageSource.asObservable();
  
  constructor() {
    console.log("created AuthService")
  }

  sendMessage(message: string) {
    this.messageSource.next(message);
  }

}
