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

@Component({
  selector: 'app-payable-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
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
      value: ['', Validators.required],
      emissionDate: ['', Validators.required],
      assignorId: ['', Validators.required],
    });
  }

  get value() {
    return this.payableForm.get('value');
  }
  get emissionDate() {
    return this.payableForm.get('emissionDate');
  }
  get assignorId() {
    return this.payableForm.get('assignorId');
  }

  onSubmit() {
    if (this.payableForm.valid) {
      // grant value is nuber
      console.log(this.payableForm.value);
      this.payableForm.value.value = parseFloat(this.payableForm.value.value);

      if (isNaN(this.payableForm.value.value)) {
        this.alertsService.error('Error', 'Value must be a number');
        return;
      }

      if (isNaN(this.payableForm.value.assignorId)) {
        this.alertsService.error('Error', 'AssignorId must be a number');
        return;
      }

      if (!this.payableForm.value.assignorId) {
        this.alertsService.info('Info', 'AssignorId is the id of the assignor');
        return;
      }

      const entity = new PayableModel();

      entity.value = this.payableForm.value.value;
      entity.emissionDate = this.payableForm.value.emissionDate;
      entity.assignorId = this.payableForm.value.assignorId;

      this.payableService.createPayable(entity).subscribe({
        next: (response) => {
          console.log(response);
          this.alertsService.success('Success', 'Payable created');
        },

        error: (error) => {
          console.error(error);
          this.alertsService.error('Error', 'Payable not created');
        },

        complete: () => {
          this.router.navigate(['/payables']);
        },
      });
    }
  }
}
