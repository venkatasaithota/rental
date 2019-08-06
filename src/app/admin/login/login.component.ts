import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }
  submit(data)
  {
    this.http.post('/admin/login',data).subscribe(res=>
      {alert(res['message'])
      if(res['message']=='logged In Successfully'){
              this.router.navigate(['admin/viewprofiles'])
      }
      })
  }
}
