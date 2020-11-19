import { Injectable } from '@angular/core';
import { User } from './user-interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  UserList: User[]  = [];

  getStudents() {
    return this.UserList;
  }

    // tslint:disable-next-line:prefer-const
// tslint:disable-next-line:member-ordering
employees = [
  {
    name: 'Employee One',
    age: 40,
    email: 'one@gmail.com',
    departments: ['Computer', 'Physics'],
  },
  {
    name: 'Employee Two',
    age: 10,
    email: 'Two@gmail.com',
    departments: ['Computer'],
  },
  {
    name: 'Employee Three',
    age: 10,
    email: 'Three@gmail.com',
    departments: ['Physics', 'Chemistry'],
  },
  {
    name: 'Employee Four',
    age: 60,
    email: 'Four@gmail.com',
    departments: ['Chemistry', 'Physics'],
  },
  {
    name: 'Employee Five',
    age: 70,
    email: 'Five@gmail.com',
    departments: ['Computer', 'Physics', 'Chemistry'],
  },
  {
    name: 'Employee Six',
    age: 70,
    email: 'Six@gmail.com',
    departments: ['Computer', 'Physics'],
  },
];
}

