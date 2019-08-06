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
  currentUser:any[]
  ngOnInit() {
    this.currentUser=this.register.currentUsername[0]
    //console.log(this.register.currentUsername)
  }
  registeration(data)
  {
    if(data.password==''){
      alert('password are mandatory')
    }
    else{
    //console.log(data)
    this.http.put('vendordashboard/editprofile',data).subscribe(res=>{
      alert(res["message"])
      this.router.navigate(['vendordashboard/viewprofile'])
    })
  }
  }


}
