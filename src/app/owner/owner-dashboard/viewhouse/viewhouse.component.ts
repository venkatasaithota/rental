import { Component, OnInit } from '@angular/core';
import { RegistredDataService } from 'src/app/registred-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewhouse',
  templateUrl: './viewhouse.component.html',
  styleUrls: ['./viewhouse.component.css']
})
export class ViewhouseComponent implements OnInit {
  houses:any[];
  constructor(private register:RegistredDataService,private http:HttpClient) { }
    
  ngOnInit() {
    var name=this.register.currentUsername[0].name
    this.http.get(`ownerdashboard/viewhouse/${name}`).subscribe(res=>{
      console.log(res["message"])
      if (res['message']!='invalid access'){
      this.houses=res["message"]}
    })
  }
  deleteDocument(deletingDocument)
  {
    console.log(deletingDocument)
    this.http.put('ownerdashboard/viewhouse/',deletingDocument).subscribe(res=>{
      alert(res["message"])
      this.houses=res["data"]
    })
  }

}
