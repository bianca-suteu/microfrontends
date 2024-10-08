import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthService } from '@et/auth';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  private readonly destroy: DestroyRef = inject(DestroyRef);

  message = '';
  sharedService = inject(AuthService);

  ngOnInit(): void {
    this.sharedService.message$
      .pipe(
        takeUntilDestroyed(this.destroy),
      ).subscribe(message => {
        this.message = message;
        console.log("Dashboard", this.message);
      })
  }
}
