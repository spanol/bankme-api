import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PayableModel } from '../../../models/payable.model';
import { PayableService } from '../payable.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertsService } from '../../alerts/alerts.service';

@Component({
  selector: 'app-payable-edit',
  standalone: true,
  imports: [RouterModule],
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
    private alertsService: AlertsService
  ) {}

  ngOnInit() {
    this.payableForm = this.fb.group({

      value: ['', [Validators.required, Validators.min(0)]],
      emissionDate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.payableService.getPayableById(id as string).subscribe((data) => {
      this.payable = data;
      this.payableForm.patchValue(this.payable);
      console.log(this.payableForm.value);
    });
  }
}
