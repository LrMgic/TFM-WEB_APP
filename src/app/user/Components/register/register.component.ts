import { formatDate } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserDTO } from 'src/app/user/Models/user.dto';
import { SharedService } from 'src/app/user/Services/shared.service';
import { UserService } from 'src/app/user/Services/user.service';
import { HeaderMenusService } from '../../Services/header-menus.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn!: ElementRef;

  registerUser: UserDTO;

  name: FormControl;
  surname_1: FormControl;
  surname_2: FormControl;
  alias: FormControl;
  birth_date: FormControl;
  email: FormControl;
  password: FormControl;
  worker: FormControl;

  registerForm: FormGroup;
  isValidForm: boolean | null;

  constructor(
    private headerMenusService: HeaderMenusService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private sharedService: SharedService,
    private router: Router
  ) {
    this.registerUser = new UserDTO(
      '',
      '',
      '',
      '',
      new Date(),
      '',
      '',
      undefined,
      ''
    );

    this.isValidForm = null;

    this.name = new FormControl(this.registerUser.name, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(25),
    ]);

    this.surname_1 = new FormControl(this.registerUser.surname_1, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(25),
    ]);

    this.surname_2 = new FormControl(this.registerUser.surname_2, [
      Validators.minLength(5),
      Validators.maxLength(25),
    ]);

    this.alias = new FormControl(this.registerUser.alias, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(25),
    ]);

    this.birth_date = new FormControl(
      formatDate(this.registerUser.birth_date, 'yyyy-MM-dd', 'en'),
      [Validators.required]
    );

    this.email = new FormControl(this.registerUser.email, [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]);

    this.password = new FormControl(this.registerUser.password, [
      Validators.required,
      Validators.minLength(8),
    ]);

    this.worker = new FormControl(this.registerUser.worker, [
      Validators.pattern('[A-Z]{4}[0-9]{5}$'),
    ]);

    this.registerForm = this.formBuilder.group({
      name: this.name,
      surname_1: this.surname_1,
      surname_2: this.surname_2,
      alias: this.alias,
      birth_date: this.birth_date,
      email: this.email,
      password: this.password,
      worker: this.worker,
      userrol: this.workerId(this.worker),
    });
  }

  ngOnInit(): void {}

  workerId(worker: any) {
    if (!worker) {
      ('client');
    } else {
      ('verificar');
    }
  }

  async register(): Promise<void> {
    this.isValidForm = !this.registerForm.invalid;

    if (this.isValidForm) {
      this.registerUser = this.registerForm.value;
      if (this.registerUser.worker == undefined) {
        this.registerUser.userrol = 'Claient';
      } else {
        this.registerUser.userrol = 'Validar';
      }

      try {
        await this.userService.register(this.registerUser);
        this.goodEnd();
        this.closeModal();
      } catch (error: any) {
        this.badEnd(error);
      }
    }
  }

  private closeModal(): void {
    this.closeBtn.nativeElement.click();
  }

  private async goodEnd(): Promise<void> {
    await this.sharedService.managementToast('registerFeedback', true);
    this.registerForm.reset();
    this.birth_date.setValue(formatDate(new Date(), 'yyyy-MM-dd', 'en'));
    this.router.navigateByUrl('');
  }

  private async badEnd(error: any): Promise<void> {
    this.headerMenusService.headerManagement.next({
      showNoIdentifieSection: true,
      showClientSection: false,
      showWorkerSection: false,
    });
    await this.sharedService.errorLog(error.error);
    await this.sharedService.managementToast(
      'registerFeedback',
      false,
      error.error
    );
  }
}
