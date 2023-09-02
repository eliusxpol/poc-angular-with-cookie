import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  currentUser: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  login(user: any) {
    return this.http.post(
      'https://shielded-wildwood-47578-706e3819f846.herokuapp.com/api/auth',
      user,
      {
        withCredentials: true,
      }
    );
  }

  saveUserToLocalStorage(user: any) {
    this.currentUser.next(user);
    localStorage.setItem('user-profile', JSON.stringify(user));
  }

  loadUserFromLocalStorage() {
    if (!this.currentUser.value) {
      const user = localStorage.getItem('user-profile');
      if (user) {
        this.currentUser.next(JSON.parse(user));
      }
    }

    return this.currentUser.value;
  }
}
