import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  credentials = { login: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    console.log(this.credentials);

    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        this.authService.setToken(response.access_token);
      },

      complete: () => {
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
