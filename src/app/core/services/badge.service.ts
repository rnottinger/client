import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  constructor() { }

  getReaderBadge(minutesRead: number): string {
    if (minutesRead >= 1000) {
      return 'Platinum Reader';
    } else if (minutesRead >= 500) {
      return 'Gold Reader';
    } else if (minutesRead >= 250) {
      return 'Silver Reader';
    } else {
      return 'Bronze Reader';
    }
  }
}
