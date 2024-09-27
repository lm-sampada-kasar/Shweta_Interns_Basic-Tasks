import { Component } from '@angular/core';
import { UsersDataService } from './services/users-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project2';
  users:any;

  constructor(private userData:UsersDataService)
  {
    userData.users().subscribe((data)=>{
      this.users=data;
    })
  }
}
