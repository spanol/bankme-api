import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/auth/auth.guard';
import { LoginComponent } from './modules/auth/login/login.component';
import { PayableDetailsComponent } from './modules/payables/payable-details/payable-details.component';
import { PayableFormComponent } from './modules/payables/payable-form/payable-form.component';
import { PayableListComponent } from './modules/payables/payable-list/payable-list.component';
import { AssignorListComponent } from './modules/assignors/assignor-list/assignor-list.component';
import { AssignorDetailsComponent } from './modules/assignors/assignor-details/assignor-details.component';
import { AssignorFormComponent } from './modules/assignors/assignor-form/assignor-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/payables', pathMatch: 'full' },
  // wildcard route prevent 404
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'assignors',
    component: AssignorListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'assignors/new',
    component: AssignorFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'assignors/:id',
    component: AssignorDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'payables',
    component: PayableListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'payables/new',
    component: PayableFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'payables/:id',
    component: PayableDetailsComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/payables' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
