import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users:any[] = [];

  constructor(private service: UserService) {}

  ngOnInit() {

    this.users = this.service.getAll();
  
  }

}
