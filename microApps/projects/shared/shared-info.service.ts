import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedInfoService {
  private messageSource = new Subject<string>();
  message$ = this.messageSource.asObservable();

  sendMessage(message: string) {
    this.messageSource.next(message);
  }
  log(app:string, message: string | null) {
    console.log(`${app} ${message}`)
  }
}
