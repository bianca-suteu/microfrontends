import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { SharedInfoService } from '../../shared/shared-info.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  constructor(private sharedService: SharedInfoService) {
  }

  ngOnInit(): void {
    this.sharedService.message$
      .pipe(
        takeUntilDestroyed(this.destroy),
      ).subscribe(message => {
        this.message = message;
        this.sharedService.log("Dashboard", this.message);
      })
  }
}
