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
  message= '';

  constructor(private sharedInfoService: AuthService) {
    this.name.valueChanges.subscribe(val => {
      this.sharedInfoService.sendMessage(val || '');
    })

    this.sharedInfoService.message$.subscribe(message => {
      this.message = message;
      sharedInfoService.log("Shell:", this.message);
    });
  }
}
