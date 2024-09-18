import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@et/auth';

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
  // sharedService1 = inject(AuthService);

  constructor(private sharedService: AuthService) {
    this.name.valueChanges.subscribe(val => {
      this.sharedService.sendMessage(val || '');
    })
  }
}
