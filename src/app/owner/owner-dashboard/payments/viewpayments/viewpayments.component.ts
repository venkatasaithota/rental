import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistredDataService } from 'src/app/registred-data.service';

@Component({
  selector: 'app-viewpayments',
  templateUrl: './viewpayments.component.html',
  styleUrls: ['./viewpayments.component.css']
})
export class ViewpaymentsComponent implements OnInit {
  payments:any[];
  constructor(private http:HttpClient,private register:RegistredDataService) { }

  ngOnInit() {
    var name=this.register.currentUsername[0].name
    this.http.get(`/ownerdashboard/viewpayments/${name}`).subscribe(res=>{
      //console.log(res["message"])
      this.payments=res["message"]
    })
  }

}
