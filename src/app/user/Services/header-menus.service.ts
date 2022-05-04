import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderMenus } from '../Models/identification-status.dto';

@Injectable({
  providedIn: 'root',
})
export class HeaderMenusService {
  headerManagement: BehaviorSubject<HeaderMenus> =
    new BehaviorSubject<HeaderMenus>({
      showNoWorkerSection: true,
      showWorkerSection: false,
    });
}
