import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users:any;
  constructor( private userData:UsersDataService) { 

    userData.users().subscribe((data)=>{
      this.users=data;
    })
  }

  ngOnInit(): void {
  }

}
