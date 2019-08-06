import { Component, OnInit } from '@angular/core';
import { RegistredDataService } from 'src/app/registred-data.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  constructor(private register:RegistredDataService) { }
  currentUser:any[]
  ngOnInit() {
    this.currentUser=this.register.currentUsername
    console.log(this.register.currentUsername)
  }

}
