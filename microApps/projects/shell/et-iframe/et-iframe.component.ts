import { Component, inject, OnInit } from '@angular/core';
import { EventsService } from '@et/events';

@Component({
  selector: 'app-et-iframe',
  standalone: true,
  imports: [],
  templateUrl: './et-iframe.component.html',
  styleUrl: './et-iframe.component.scss'
})
export class EtIframeComponent implements OnInit {
  eventsService = inject(EventsService)

  ngOnInit(): void {

    

    const element = document.createElement("div"); // create a <div> element

    // add an appropriate event listener
    window.document.addEventListener("animalfound", (e: any) => console.log(e.detail.name));

    
  }

  sendEvent() {
    const destination = document.getElementById('destination') as any;
    if (destination?.contentWindow as Window) {
      destination.contentWindow.postMessage('UI', "*");
    }
  }
}
