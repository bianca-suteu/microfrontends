import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@et/auth';
import { EventsService } from '@et/events';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name = new FormControl('');
  message = '';
  eventsService = inject(EventsService)

  constructor(private sharedService: AuthService) {
    this.name.valueChanges.subscribe(val => {
      this.sharedService.sendMessage(val || '');
      this.postMessage(val || '');
    });
  }

  sendEvent() {
    // // create custom events
    const catFound = new CustomEvent("UI", {
      detail: {
        name: "cat",
      },
    });

    // const element = window.document;//document.createElement("div"); // create a <div> element

    // // add an appropriate event listener
    // // element.addEventListener("animalfound", (e: any) => console.log(e.detail.name));

    // // dispatch the events
    // element.dispatchEvent(catFound);
    const destination = document.getElementById('destination') as any;
    if (destination?.contentWindow as Window) {
      //destination.contentWindow.addEventListener("UI", (e: any) => console.log(e.detail.name));
      destination.contentWindow.dispatchEvent(catFound);
    }
  }

  postMessage(val: string) {
    const destination = document.getElementById('destination') as any;
    if (destination?.contentWindow as Window) {
      destination.contentWindow.postMessage(val, "*");
    }
  }
}
