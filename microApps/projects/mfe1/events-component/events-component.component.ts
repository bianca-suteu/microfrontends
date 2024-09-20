import { Component, inject, OnInit } from '@angular/core';
import { EventsService } from '@et/events';

@Component({
  selector: 'app-events-component',
  standalone: true,
  imports: [],
  templateUrl: './events-component.component.html',
  styleUrl: './events-component.component.css'
})
export class EventsComponentComponent implements OnInit {
  message = '';
  eventsService = inject(EventsService)

  ngOnInit(): void {
    this.eventsService.getElement().addEventListener("mess", (e: any) => {
      this.message = e.detail.name;
    });
    
  }
}
