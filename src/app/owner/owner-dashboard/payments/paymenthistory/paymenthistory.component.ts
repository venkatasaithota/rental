import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistredDataService } from 'src/app/registred-data.service';

@Component({
  selector: 'app-paymenthistory',
  templateUrl: './paymenthistory.component.html',
  styleUrls: ['./paymenthistory.component.css']
})
export class PaymenthistoryComponent implements OnInit {
  clients:any[]=[];
  constructor(private http:HttpClient,private register:RegistredDataService) { }

  ngOnInit() {
    this.http.get(`/ownerdashboard/paymenthistory/${this.register.currentUsername[0].name}`).subscribe(
      res=>{
        this.clients=res['data']
      }
    )
  }

}
