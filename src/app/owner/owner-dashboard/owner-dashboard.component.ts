import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.css']
})
export class OwnerDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout()
  {
    localStorage.removeItem('idToken')
    this.router.navigate(['/nav/home'])
  }

}
