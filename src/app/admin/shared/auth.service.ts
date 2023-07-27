import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor() {}

  authStatus: Subject<boolean> = new BehaviorSubject(false);

  logout(){
    this.authStatus.next(false);
  }

}
