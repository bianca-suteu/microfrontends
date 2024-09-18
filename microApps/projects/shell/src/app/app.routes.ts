import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  pathMatch: 'full',
},
{
  path: 'mfe1',
  loadComponent: () =>
    loadRemoteModule('mfe1', './Component').then((m) => m.AppComponent),
},
];
