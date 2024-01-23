import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import userInfo from './userInfo'

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: any = userInfo;
  eename: string = "";
  eessn: number = 0;
  eeaddress: string = "";
  eenation: string = "";
  showEdit: string = "none";

  createUser(name: string, ssn: string, address: string, nationality: string) {
    const newSSN: number = Number(ssn);
    const existingUser = userInfo.find(user => user.ssn === newSSN);

    if (existingUser) {
      alert("User already exists!");
    } else {
      console.log("User being created")
      const newUser: any = {
        name, newSSN, address, nationality,
      }
      this.users.push(newUser);
    }
  }

  remUser(userssn: number) {
    userInfo.forEach((user, index) => {
      if (user.ssn === userssn) {
        userInfo.splice(index, 1);
      }
    });
  }

  editUser(name: string, ssn: string, address: string, nationality: string) {
    const newSSN: number = Number(ssn);
    const index = this.users.findIndex((user: any) => user.ssn === newSSN);
    this.users[index] = { name, newSSN, address, nationality };
    this.showEdit = "none";
  }

  setEditUser(ssn: number) {
    this.showEdit = "block";
    const index = this.users.findIndex((user: any) => user.ssn === ssn);
    this.eename = this.users[index].name;
    this.eessn = this.users[index].ssn
    this.eeaddress = this.users[index].address;
    this.eenation = this.users[index].nationality;
  }
}

