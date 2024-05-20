import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AssignorService } from '../assignor.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignor-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './assignor-form.component.html',
  styleUrl: './assignor-form.component.css',
})
export class AssignorFormComponent {
  assignorForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private assignorService: AssignorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.assignorForm = this.fb.group({
      name: ['', Validators.required],
      document: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  get name() { return this.assignorForm.get('name'); }
  get document() { return this.assignorForm.get('document'); }
  get email() { return this.assignorForm.get('email'); }
  get phone() { return this.assignorForm.get('phone'); }

  onSubmit() {
    if (this.assignorForm.valid) {
      this.assignorService
        .createAssignor(this.assignorForm.value)
        .subscribe(() => {
          this.router.navigate(['/assignors']);
        });
    }
  }
}
