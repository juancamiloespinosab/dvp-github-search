import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserState {

  private userObservablePrivate: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([])

  constructor() { }

  get userObservable() {
    return this.userObservablePrivate.asObservable();
  }

  set userObservableData(users: User[]) {
    this.userObservablePrivate.next(users)
  }
}