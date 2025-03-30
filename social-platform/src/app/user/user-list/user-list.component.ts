import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  users: any[] = []

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.refreshUsers();
  }

  refreshUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users)
  }

}
