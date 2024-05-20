import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayableFormComponent } from './payables/payable-form/payable-form.component';
import { PayableListComponent } from './payables/payable-list/payable-list.component';
import { PayableDetailsComponent } from './payables/payable-details/payable-details.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/payables', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  // assignor

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
