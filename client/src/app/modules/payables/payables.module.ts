import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PayableListComponent } from './payable-list/payable-list.component';
import { PayableDetailsComponent } from './payable-details/payable-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { PayableFormComponent } from './payable-form/payable-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class PayablesModule {}
