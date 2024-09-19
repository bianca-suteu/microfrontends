import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { EtIframeComponent } from '../../et-iframe/et-iframe.component';

export const routes: Routes = [{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'mfe1',
  loadComponent: () =>
    loadRemoteModule('mfe1', './Component').then((m) => m.AppComponent),
},
{
  path: 'iframe',
  component: EtIframeComponent
},
];
