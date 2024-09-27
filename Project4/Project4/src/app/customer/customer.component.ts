import { Component, OnInit } from '@angular/core';
import { UserListService } from '../services/user-list.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 
  users:any;
  constructor(private userslist:UserListService) {

    userslist.users().subscribe((list)=>{
      this.users=list;
    })
   }

  ngOnInit(): void {
  }

}
