import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUser: any = {
    email: '',
    password: '',
  };

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  login() {
    this.auth.login(this.loginUser).subscribe({
      next: (user: any) => {
        this.auth.saveUserToLocalStorage(user);
        console.log(user);
        alert('Login successful!');
      },
      error: (error: any) => {
        console.log(error);
        alert('Login failed!');
      },
    });
  }
}
