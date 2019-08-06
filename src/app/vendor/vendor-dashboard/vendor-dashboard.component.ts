import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout()
  {
    localStorage.removeItem('idToken')
    this.router.navigate(['/nav/home'])
  }
}
