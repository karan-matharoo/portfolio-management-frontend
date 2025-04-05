import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { User } from '../user';
import { UserService } from '../user-service.service';


@Component({
  selector: 'app-user-list',
  imports: [NgFor],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [
    { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: '3', name: 'Peter Jones', email: 'peter.jones@example.com' },];

  // constructor(private userService: UserService) {
  // }

  ngOnInit() {
    // this.userService.findAll().subscribe(data => {
    //   this.users = data;
    // });
  }
}
