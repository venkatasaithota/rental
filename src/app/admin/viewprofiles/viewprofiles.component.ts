import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewprofiles',
  templateUrl: './viewprofiles.component.html',
  styleUrls: ['./viewprofiles.component.css']
})
export class ViewprofilesComponent implements OnInit {
data:any[];
data1:any[];
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
      this.http.get('/admin/viewprofiles').subscribe(res=>{
        //console.log(res['data'])
        //console.log(res['data1'])
        this.data=res['data']
        this.data1=res['data1']
      })
  }
logout(){
  this.router.navigate(['/nav/home'])
}
}
