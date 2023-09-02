import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-14-crud-example';
  userInfo?: any;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.currentUser.subscribe((user: any) => {
      this.userInfo = user;
    });
  }
}
