import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderMenus } from 'src/app/user/Models/identification-status.dto';
import { OrderDTO, SerchOrderDTO } from 'src/app/user/Models/order.dto';
import { HeaderMenusService } from 'src/app/user/Services/header-menus.service';
import { OrderService } from 'src/app/user/Services/order.service';
import { SharedService } from 'src/app/user/Services/shared.service';
import { UserService } from 'src/app/user/Services/user.service';

@Component({
  selector: 'app-seguiment',
  templateUrl: './seguiment.component.html',
  styleUrls: ['./seguiment.component.scss'],
})
export class SeguimentComponent implements OnInit {
  showNoIdentifieSection: boolean;
  showClientSection: boolean;

  serchOrder: SerchOrderDTO;

  shareOrderList!: OrderDTO[];

  order_id: FormControl;
  email: FormControl;

  serchForm: FormGroup;
  isValidForm: boolean | null;

  showSerchSection: boolean

  constructor(
    private headerMenusService: HeaderMenusService,
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private sharedService: SharedService,
    private router: Router
  ) {
    this.showNoIdentifieSection = true;
    this.showClientSection = false;

    this.showSerchSection = false

    this.serchOrder = new SerchOrderDTO(
      '',
      '',
    );

    this.isValidForm = null;

    this.order_id = new FormControl(this.serchOrder.order_id, [
      Validators.required,
      Validators.pattern('[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$'),
    ]);

    this.email = new FormControl(this.serchOrder.email, [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]);

    this.serchForm = this.formBuilder.group({
      order_id: this.order_id,
      email: this.email,
    });
  }

  ngOnInit(): void {
    this.headerMenusService.headerManagement.subscribe((headerInfo: HeaderMenus) => {
      if (headerInfo) {
        this.showNoIdentifieSection = headerInfo.showNoIdentifieSection;
        this.showClientSection = headerInfo.showClientSection;
      }
    });
  }

  async saveOrder(): Promise<void> {
    this.isValidForm = !this.serchForm.invalid;

    if (this.isValidForm) {
      this.serchOrder = this.serchForm.value;

      try {
        await this.orderService.getOrderById(this.serchOrder);
        this.goodEnd();
      } catch (error: any) {
        this.badEnd(error);
      }
    }
  }

  private async goodEnd(): Promise<void> {
    await this.sharedService.managementToast('registerFeedback', true);
    this.showSerchSection = true;
    var orderListTemp = await this.orderService.getOrderById(
      this.serchOrder
    );
    this.shareOrderList.push(orderListTemp)
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
