import { Component, OnInit,OnChanges } from '@angular/core';
import { RegistredDataService } from 'src/app/registred-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-whomtolet',
  templateUrl: './whomtolet.component.html',
  styleUrls: ['./whomtolet.component.css']
})
export class WhomtoletComponent implements OnInit,OnChanges {
  b:boolean = true;
  status:string;
  value:string;
  check:boolean;
  list:any[]=[];
  currentUser:any[];
  searchTerm:string;
  constructor(private http:HttpClient,private register:RegistredDataService) { }
  ngOnInit() {
    // this.status=this.s.status;
    // this.check=this.s.check;
    // for(let x of this.houses.houseList)
    // {
    //       this.list.push(x)
    // }
    this.currentUser=this.register.currentUsername
    
    this.http.get("/vendordashboard/whomtolet").subscribe(
      res=>{
        this.list=res['message']
        console.log(this.list)
      })
  }
  ngOnChanges()
  {
  }
  changeStatus(expectedRent,house) {
    console.log(expectedRent,house)
    console.log(this.currentUser)
    var insteredHouse={
      "eRent": expectedRent,
      "address":house.address,
      "vendorname": this.currentUser[0].name,
      "number":this.currentUser[0].number,
      "mail":this.currentUser[0].mail,
      "ownername":house.ownername,
     

    }
    console.log(insteredHouse)
    this.http.post('/vendordashboard/whomtolet',insteredHouse).subscribe(res=>{
        alert(res['message'])
      }
    )
    // this.b=false;
    // this.s.valueFromWhomTolet=this.b;
    
  }
}
