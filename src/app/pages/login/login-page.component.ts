import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from './login-service';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'qzy-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, RouterLink, MatInputModule, MatButtonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  private readonly loginService = inject(LoginService);
  private readonly router = inject(Router);

  loginForm: FormGroup;
  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  doLogin() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).pipe(take(1)).subscribe((result) => {
      if (result.isSuccess) {
        this.router.navigateByUrl('');
      }
      else {
        alert(result.errors.join('\n'));
      }
    });
  }
}
