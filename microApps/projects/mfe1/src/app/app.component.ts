import { Component, DestroyRef, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedInfoService } from '../../../shared/shared-info.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private readonly destroy: DestroyRef = inject(DestroyRef);
  sharedService = inject(SharedInfoService);
  message= '';
 

  ngOnInit(): void {
    this.sharedService.message$.pipe(
      takeUntilDestroyed(this.destroy),
    ).subscribe(message => {
      this.message = message;
      this.sharedService.log("MFE1:", this.message);
    });
  }
}
