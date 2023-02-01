import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BusyService {

  private _busyState = new BehaviorSubject({ isBusy: false, message: '' });
  public readonly busyState$ = this._busyState.asObservable();

  constructor() { }

  /**
   * show spinner
   * @param msg
   */
  show(msg: string) {
    this._busyState.next({ isBusy: true, message: msg });
  }

  /**
   * hide spinner
   */
  hide() {
    this._busyState.next({ isBusy: false, message: '' });
  }
}
