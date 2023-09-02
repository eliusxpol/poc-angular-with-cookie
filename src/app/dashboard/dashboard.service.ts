import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getMessages() {
    return this.http.get(
      'https://shielded-wildwood-47578-706e3819f846.herokuapp.com/api/messages',
      {
        withCredentials: true,
      }
    );
  }
}
