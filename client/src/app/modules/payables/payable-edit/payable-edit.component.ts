import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PayableModel } from '../../../models/payable.model';
import { PayableService } from '../payable.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AlertsService } from '../../alerts/alerts.service';
import { CommonModule } from '@angular/common';
import { NgxCurrencyDirective } from 'ngx-currency';

@Component({
  selector: 'app-payable-edit',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NgxCurrencyDirective,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './payable-edit.component.html',
  styleUrl: './payable-edit.component.css',
})
export class PayableEditComponent implements OnInit {
  payable: PayableModel = {} as PayableModel;
  payableForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private payableService: PayableService,
    private route: ActivatedRoute,
    private router: Router,
    private alertsService: AlertsService
  ) {
    document.title = 'Payable - Edit';
  }

  ngOnInit() {
    this.payableForm = this.fb.group({
      value: ['', [Validators.required, Validators.min(0)]],
      emissionDate: ['', Validators.required],
      assignorName: ['', Validators.required],
      assignorEmail: ['', [Validators.required, Validators.email]],
      assignorId: ['', Validators.required],
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.payableService.getPayableById(id as string).subscribe((data) => {
      this.payable = data;
      this.payableForm.patchValue({
        value: this.payable.value,
        emissionDate: this.payable.emissionDate,
        assignorName: this.payable.assignor.name,
        assignorEmail: this.payable.assignor.email,
        assignorId: this.payable.assignor.id,
      });
      console.log(this.payableForm.value);
    });
  }

  onCancel() {
    this.payableForm.reset();
    this.router.navigate(['/payables']);
  }


  get value() {
    return this.payableForm.get('value');
  }

  get emissionDate() {
    return this.payableForm.get('emissionDate');
  }

  get email() {
    return this.payableForm.get('email');
  }

  get assignorId() {
    return this.payableForm.get('assignorId');
  }

  onSubmit() {
    if (this.payableForm.valid) {
      // this.payableService.updatePayable(this.payableForm.value).subscribe({
      //   next: () => {
      //     this.alertsService.showSuccess('Payable updated successfully');
      //   },
      //   error: () => {
      //     this.alertsService.showError('Failed to update payable');
      //   },
      // });
    }
  }

}
