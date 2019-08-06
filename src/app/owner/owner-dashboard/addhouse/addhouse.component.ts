import { Component, OnInit } from '@angular/core';
import { RegistredDataService } from 'src/app/registred-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addhouse',
  templateUrl: './addhouse.component.html',
  styleUrls: ['./addhouse.component.css']
})
export class AddhouseComponent implements OnInit {

  constructor(private http:HttpClient,private register:RegistredDataService) { }

  ngOnInit() {
  }
  addHouse(data)
  {
    if(data.address=="")
    {
      alert('address field is mandatory')
    }
    else
    {
      data.ownername=this.register.currentUsername[0].name
      console.log(data)
      data.reqstatus = "";
      this.http.post('/ownerdashboard/addhouse/',data).subscribe((res)=>{
        alert(res["message"])
      })
    }
    
  }
}
