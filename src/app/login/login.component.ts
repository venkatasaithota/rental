import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistredDataService } from 'src/app/registred-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor( private router: Router,private http:HttpClient,private register:RegistredDataService) { }
  ngOnInit() {
  }
  submit(data) {
    if(data.name=='' || data.password=='' || data.usertype==''){
      alert('name ,password ,userType are mandatory')
    }
    else{
      this.http.post('nav/login/',data).subscribe((res)=>{
        if (res["message"]=='owner name invalid')
        {
          alert('please valid owner name')
        }
        else if(res["message"]=='owner password invalid')
        {
          alert('please enter valid owner password')
        }
        else if(res["message"]=='owner logged in successfully')
        {
          alert('successfully logged in as owner')
          this.register.currentUsername=res["userdata"]
          localStorage.setItem("idToken",res['token'])
          //console.log(res['token'])
          this.router.navigate(['/ownerdashboard/viewprofile']);
        }
        else if (res["message"]=='vendor name invalid')
        {
          alert('please valid vendor name')
        }
        else if(res["message"]=='vendor password invalid')
        {
          alert('please enter valid vendor password')
        }
        else if(res["message"]=='vendor logged in successfully')
        {
          alert('successfully logged in as vendor')
          this.register.currentUsername=res["userdata"]
          localStorage.setItem("idToken",res['token'])
          //console.log(res['token'])
          this.router.navigate(['/vendordashboard/viewprofile']);
  
        }
  
  })

    }

  
}
}