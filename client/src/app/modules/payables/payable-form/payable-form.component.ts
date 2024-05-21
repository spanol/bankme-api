import { PayableModel } from './../../../models/payable.model';
import { AlertsService } from './../../alerts/alerts.service';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { PayableService } from '../payable.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxCurrencyDirective } from 'ngx-currency';

@Component({
  selector: 'app-payable-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgxCurrencyDirective,
  ],
  templateUrl: './payable-form.component.html',
  styleUrl: './payable-form.component.css',
})
export class PayableFormComponent {
  payableForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private payableService: PayableService,
    private router: Router,
    private alertsService: AlertsService
  ) {}

  ngOnInit() {
    this.payableForm = this.fb.group({
      value: ['', [Validators.required, Validators.min(0)]],
      emissionDate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get value() {
    return this.payableForm.controls['value'];
  }
  get emissionDate() {
    return this.payableForm.controls['emissionDate'];
  }
  get email() {
    return this.payableForm.controls['email'];
  }

  onSubmit() {
    // grant value is nuber
    

    const formValues = this.payableForm.value;
    formValues.value = formValues.value.replace(',', '.');

    if (isNaN(this.payableForm.value.value)) {
      this.alertsService.error('Error', 'Value must be a number');
      return;
    }

    const entity = new PayableModel();
    entity.value = this.payableForm.value.value;
    entity.emissionDate = this.payableForm.value.emissionDate;
    entity.assignorEmail = this.payableForm.value.email;

    this.payableService.createPayable(entity).subscribe({
      next: (response) => {
        console.log(response);
        this.alertsService.success('Success', 'Payable created');
        this.router.navigate(['/payables']);
      },

      error: (error) => {
        console.error(error);
        this.alertsService.error('Error', 'Payable not created');
      },
    });
  }
}
