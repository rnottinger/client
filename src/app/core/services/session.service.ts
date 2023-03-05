import { Injectable } from '@angular/core';
import { SessionStorage } from "../models/session-storage";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  sessionStorage: SessionStorage = new SessionStorage();

  constructor() { }

  public set(key:string, value:string){
    this.sessionStorage[key as keyof SessionStorage] = value;
  }

  get(key:string):string{
    return this.sessionStorage[key as keyof SessionStorage];
  }

  remove(key:string){
    this.sessionStorage[key as keyof SessionStorage] = '';
  }

  clear(){
    this.sessionStorage = new SessionStorage();
  }

  isReadOnly() {
    return false;
  }
}
