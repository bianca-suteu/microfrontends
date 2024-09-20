import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  element = document.createElement("div");
    
  constructor() { }
 
  createEvent(name: string, message = 'optional') {
    const addToCartEvent = new CustomEvent(name, { detail: { message } });

    window.dispatchEvent(addToCartEvent);
  }

  getElement() {
    return this.element;
  }

  sendEvent(event: CustomEvent) {
    this.element.dispatchEvent(event);
  }
}
