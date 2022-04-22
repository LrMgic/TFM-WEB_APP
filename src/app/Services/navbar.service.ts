import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IdenidentificationStatus } from '../Models/identification-status.dto';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  navbarManagement: BehaviorSubject<IdenidentificationStatus> =
    new BehaviorSubject<IdenidentificationStatus>({
      showClient: false,
      showWorker: false,
      showNoIdentified: true,
    });
}
