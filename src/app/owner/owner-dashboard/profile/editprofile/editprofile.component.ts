import { Component, OnInit } from '@angular/core';
import { RegistredDataService } from 'src/app/registred-data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  constructor(private register:RegistredDataService,private http:HttpClient,private router:Router) { }
  currentUser:any;
  ngOnInit() {
    this.currentUser=this.register.currentUsername[0]
  }

  registeration(data)
  {
    if(data.password=='')
    {
      alert('password field is mandatory')
    }
    else{
      console.log(data)
      this.http.put('ownerdashboard/editprofile',data).subscribe(res=>{
      alert(res["message"])
      this.router.navigate(['/ownerdashboard/viewprofile'])
    })
    }
     
  }

}
