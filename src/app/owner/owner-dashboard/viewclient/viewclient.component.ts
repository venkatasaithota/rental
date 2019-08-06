import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistredDataService } from 'src/app/registred-data.service';

@Component({
  selector: 'app-viewclient',
  templateUrl: './viewclient.component.html',
  styleUrls: ['./viewclient.component.css']
})
export class ViewclientComponent implements OnInit {
  //valueFromWhomTolet:boolean;
  //check:boolean;
  clients:any[]=[];
  constructor(private http:HttpClient,private register:RegistredDataService) { }
  ngOnInit() {
    this.http.get(`/ownerdashboard/viewclient/${this.register.currentUsername[0].name}`).subscribe(res=>{
      this.clients=res['message']
    })
  }
  accept(data)
  {
    data.reqstatus="request accepted";
    this.register.setResponse(data).subscribe(res=>{
      alert('response sent')
      this.clients=res['data']
    })
    
    
  }
  reject(data)
  {
    data.reqstatus="request rejected";
    this.register.setResponse(data).subscribe(res=>{
      alert('response sent')
      this.clients=res['data']
    })
    
  }
}
