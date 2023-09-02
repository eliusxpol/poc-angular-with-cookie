import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  messages?: any[];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getMessages().subscribe({
      next: (messages: any) => {
        console.log(messages);
        this.messages = messages;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
