import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

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

  // constructor(private sharedInfoService: SharedInfoService) {
  //   this.name.valueChanges.subscribe(val => {
  //     console.log(val);
  //     this.sharedInfoService.sendMessage(val || '');
  //   })

  //   this.sharedInfoService.message$.subscribe(message => {
  //     this.message = message;
  //     console.log("Shared", this.message)
  //   });
  // }
}
