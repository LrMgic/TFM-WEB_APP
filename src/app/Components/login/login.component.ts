import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { HeaderMenusService } from 'src/app/Services/header-menus.service';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { SharedService } from 'src/app/Services/shared.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: FormControl;
  password: FormControl;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private sharedService: SharedService,
    private headerMenusService: HeaderMenusService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]);

    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
    ]);

    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
    });
  }

  ngOnInit(): void {}

  async login(): Promise<void> {
    try {
      const authToken = await this.authService.login(this.loginForm.value);
      this.goodLogin(authToken);
    } catch (error: any) {
      this.badLogin(error);
    }
  }

  private async goodLogin(authToken: any): Promise<void> {
    this.localStorageService.set('user_id', authToken.user_id);
    this.localStorageService.set('access_token', authToken.access_token);

    await this.sharedService.managementToast('loginFeedback', true);
    this.headerMenusService.headerManagement.next({
      showAuthSection: true,
      showNoAuthSection: false,
    });
    this.router.navigateByUrl('/post/home');
  }

  private async badLogin(error: any): Promise<void> {
    this.headerMenusService.headerManagement.next({
      showAuthSection: false,
      showNoAuthSection: true,
    });
    await this.sharedService.errorLog(error.error);
    await this.sharedService.managementToast(
      'loginFeedback',
      false,
      error.error
    );
  }
}
