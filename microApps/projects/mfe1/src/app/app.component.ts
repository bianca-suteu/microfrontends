import { Component, DestroyRef, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthService } from '@et/auth';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private readonly destroy: DestroyRef = inject(DestroyRef);
  // sharedService1 = inject(AuthService);
  message = '';

  constructor(private sharedService: AuthService) {
  }

  ngOnInit(): void {
    this.sharedService.message$.pipe(
      takeUntilDestroyed(this.destroy),
    ).subscribe(message => {
      this.message = message;
      console.log("MFE:", this.message)
    });
  }
}
