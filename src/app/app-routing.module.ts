import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components


import { DashboardComponent } from './dashboard/dashboard.component';
import { HotelsGComponent } from './hotels-g/hotels-g.component';

const routes: Routes = [
  {path: '', component: HotelsGComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
