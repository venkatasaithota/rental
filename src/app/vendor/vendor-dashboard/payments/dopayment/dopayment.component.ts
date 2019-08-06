import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistredDataService } from 'src/app/registred-data.service';

@Component({
  selector: 'app-dopayment',
  templateUrl: './dopayment.component.html',
  styleUrls: ['./dopayment.component.css']
})
export class DopaymentComponent implements OnInit {

  constructor(private http:HttpClient,private register:RegistredDataService) { }

  ngOnInit() {
  }
  payment(data){
    if(data.ownername==''||data.address==''|| data.amount==''||data.date==''||data.ifsccode==''||data.accountnumber==''){
      alert('all fields mandatory')
    }
    else{
      console.log(data)
    data.vendorname= this.register.currentUsername[0].name
    data.paystatus='payed'
  this.http.post('/vendordashboard/dopayment',data).subscribe(res=>{
    alert(res['message'])
  })
    }
    
  }
}
