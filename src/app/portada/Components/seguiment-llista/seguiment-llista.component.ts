import { Component, OnInit } from '@angular/core';
import { OrderDTO } from 'src/app/user/Models/order.dto';
import { LocalStorageService } from 'src/app/user/Services/local-storage.service';
import { OrderService } from 'src/app/user/Services/order.service';
import { SharedService } from 'src/app/user/Services/shared.service';

@Component({
  selector: 'app-seguiment-llista',
  templateUrl: './seguiment-llista.component.html',
  styleUrls: ['./seguiment-llista.component.scss'],
})
export class SeguimentLlistaComponent implements OnInit {
  orderList!: OrderDTO[];

  constructor(
    private orderService: OrderService,
    private sharedService: SharedService,
    private localStorageService: LocalStorageService
  ) {
    this.orderList = [
      {
        order_id: '6g0142c4-7835-3cbf-1f2c-98a0a7586af0',
        user_id: '7f0031c4-4861-4bba-9d2c-87a0a5379aa0',
        order_name: 'La meva primera comanda',
        specifications: [],
        progres: [
          {
            etapa: 'Comanda',
            date_inici: new Date('2022-05-8 22:15:57.356'),
            date_fi: null,
          },
        ],
        observations: [
          {
            user_id: '7f0031c4-4861-4bba-9d2c-87a0a5379aa0',
            date_observation: new Date('2022-05-8 22:15:57.356'),
            description: 'Trucar a la porta quan arribi',
            action: 'Entrega',
          },
        ],
      },
    ];
  }

  private async loadOrders(): Promise<void> {
    //Refactor: Inline Temp
    //let errorResponse: any;
    const userId = this.localStorageService.get('user_id');
    if (userId) {
      try {
        this.orderList = await this.orderService.getOrdersByUserId(userId);
      } catch (error: any) {
        this.sharedService.errorLog(error.error);
      }
    }
  }

  ngOnInit(): void {
    this.loadOrders();
  }
}
