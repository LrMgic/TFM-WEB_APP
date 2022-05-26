import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Data, Router } from '@angular/router';
import { ContactDTO, ContactMethodDTO } from 'src/app/user/Models/contact.dto';
import { HeaderMenus } from 'src/app/user/Models/identification-status.dto';
import { ContactService } from 'src/app/user/Services/contact.service';
import { HeaderMenusService } from 'src/app/user/Services/header-menus.service';
import { LocalStorageService } from 'src/app/user/Services/local-storage.service';
import { SharedService } from 'src/app/user/Services/shared.service';
import { ContactValidator } from '../../validators/contact.validation';

@Component({
  selector: 'app-contacta',
  templateUrl: './contacta.component.html',
  styleUrls: ['./contacta.component.scss'],
})
export class ContactaComponent implements OnInit {
  showNoIdentifieSection: boolean;
  showClientSection: boolean;

  newContact: ContactDTO;
  contactMethods: ContactMethodDTO;

  user: FormControl;
  subject: FormControl;
  description: FormControl;
  publication_date: Data;
  method: FormControl;
  methodValue: FormControl;

  contactForm: FormGroup;
  isValidForm: boolean | null;
  alias: string = '';

  constructor(
    private headerMenusService: HeaderMenusService,
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private sharedService: SharedService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    this.showNoIdentifieSection = true;
    this.showClientSection = false;

    this.contactMethods = new ContactMethodDTO('', '');

    this.newContact = new ContactDTO(
      this.alias,
      '',
      '',
      new Date(),
      this.contactMethods,
      ''
    );

    this.isValidForm = null;

    this.user = new FormControl(this.newContact.user, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(25),
    ]);

    this.subject = new FormControl(this.newContact.subject, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(55),
    ]);

    this.description = new FormControl(this.newContact.description, [
      Validators.maxLength(555),
    ]);

    this.publication_date = new Date();

    this.method = new FormControl(this.newContact.contact_methods.method, [
      Validators.required,
      ContactValidator.MethodTipeOf,
    ]);

    this.methodValue = new FormControl(
      this.newContact.contact_methods.methodValue,
      [Validators.required]
    );

    this.contactForm = this.formBuilder.group({
      user: this.user,
      subject: this.subject,
      description: this.description,
      publication_date: this.publication_date,
      contact_method: [this.method, this.methodValue],
    });
  }

  ngOnInit(): void {
    this.headerMenusService.headerManagement.subscribe(
      (headerInfo: HeaderMenus) => {
        if (headerInfo) {
          this.showNoIdentifieSection = headerInfo.showNoIdentifieSection;
          this.showClientSection = headerInfo.showClientSection;
          const alias = this.localStorageService.get('alias');
          if (alias) {
            this.alias = alias;
          }
        }
      }
    );
  }

  async saveContact(): Promise<void> {
    this.isValidForm = !this.contactForm.invalid;

    if (this.isValidForm) {
      this.newContact = this.contactForm.value;

      try {
        this.goodEnd();
      } catch (error: any) {
        this.badEnd(error);
      }
    }
  }

  private async goodEnd(): Promise<void> {
    await this.sharedService.managementToast('registerFeedback', true);
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
