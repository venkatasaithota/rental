import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(private router: Router,private http:HttpClient) { }

  ngOnInit() {
  }
  register(data){
    if(data.name=='' || data.password=='' || data.usertype==''){
      alert('name ,password ,userType are mandatory')
    }
    else{
      this.http.post('nav/register/',data).subscribe((res)=>{
      
        if(res["message"]=="registered successfully")
        {
          alert(res["message"])
          this.router.navigate(['nav/login/'])
        }
        else if(res["message"]=="name exists")
        {
          alert('name already exists please take another name')
        }
      })
    }
    
   
  }

}
