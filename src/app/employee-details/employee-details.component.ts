import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor( private user: UserService ,
               private http: HttpClient) { }
data = [];
query = '';
unique = '';
sortByAsc = true;
public ProductDetails: object = [];

sort_data(type) {
  if (type === 'name') {
    if (this.sortByAsc === true) {
      this.sortByAsc = false;
      this.data.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      this.sortByAsc = true;
      this.data.sort((a, b) => b.name.localeCompare(a.name));
  }
  }
  if (type === 'age') {
    if (this.sortByAsc === true) {
      this.sortByAsc = false;
      this.data.sort((a, b) => a.age.toString().localeCompare(b.age));
    } else {
      this.sortByAsc = true;
      this.data.sort((a, b) => b.age.toString().localeCompare(a.age));
  }
  }
  if (type === 'email') {
    if (this.sortByAsc === true) {
      this.sortByAsc = false;
      this.data.sort((a, b) => a.email.localeCompare(b.email));
    } else {
      this.sortByAsc = true;
      this.data.sort((a, b) => b.email.localeCompare(a.email));
  }
  }
  if (type === 'depts') {
    if (this.sortByAsc === true) {
      this.sortByAsc = false;
      this.data.sort((a, b) => a.departments.toString().localeCompare(b.departments));
    } else {
      this.sortByAsc = true;
      this.data.sort((a, b) => b.departments.toString().localeCompare(a.departments));
  }
  }
}

sort() {
  if (this.sortByAsc === true) {
    this.sortByAsc = false;
    this.data.sort((a, b) => a.name.localeCompare(b.name));

  } else {
    this.sortByAsc = true;
    this.data.sort((a, b) => b.name.localeCompare(a.name));
}
}
SearchProduct(name: string) {
  const obj = this.data.filter(m => m.departments === name);
  this.ProductDetails = obj;
  return this.ProductDetails;
}

  ngOnInit() {

    // tslint:disable-next-line:no-unused-expression
    this.data = this.user.employees;
    console.log(this.user.employees);
  }

}
