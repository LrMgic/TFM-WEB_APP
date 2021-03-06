import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/Services/auth.service';
import { HeaderMenusService } from 'src/app/user/Services/header-menus.service';
import { LocalStorageService } from 'src/app/user/Services/local-storage.service';
import { SharedService } from 'src/app/user/Services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn!: ElementRef;

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
      this.closeModal();
    } catch (error: any) {
      this.badLogin(error);
    }
  }

  private closeModal(): void {
    this.closeBtn.nativeElement.click();
  }

  private async goodLogin(authToken: any): Promise<void> {
    this.localStorageService.set('user_id', authToken.user_id);
    this.localStorageService.set('access_token', authToken.access_token);
    this.localStorageService.set('alias', authToken.alias);
    this.localStorageService.set('userrol', authToken.userrol);

    await this.sharedService.managementToast('loginFeedback', true);

    if (authToken.userrol === 'Treballador') {
      this.headerMenusService.headerManagement.next({
        showNoIdentifieSection: false,
        showClientSection: true,
        showWorkerSection: true,
      });
      this.router.navigateByUrl('treballador');
    } else {
      this.headerMenusService.headerManagement.next({
        showNoIdentifieSection: false,
        showClientSection: true,
        showWorkerSection: false,
      });
      this.router.navigateByUrl('client');
    }
  }

  private async badLogin(error: any): Promise<void> {
    this.headerMenusService.headerManagement.next({
      showNoIdentifieSection: true,
      showClientSection: false,
      showWorkerSection: false,
    });
    await this.sharedService.errorLog(error.error);
    await this.sharedService.managementToast(
      'loginFeedback',
      false,
      error.error
    );
  }
}
