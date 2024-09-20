import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SharedLibComponentComponent } from "../../shared-lib-component/shared-lib-component.component";
import { EventsComponentComponent } from '../../events-component/events-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, SharedLibComponentComponent, SharedLibComponentComponent, EventsComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
