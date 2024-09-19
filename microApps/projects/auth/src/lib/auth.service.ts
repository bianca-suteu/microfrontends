import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private messageSource = new BehaviorSubject<string>('anonymous user');
  message$ = this.messageSource.asObservable();
  
  constructor() {
    console.log("created AuthService")
  }

  sendMessage(message: string) {
    this.messageSource.next(message);
  }

}
