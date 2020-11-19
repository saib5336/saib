import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user-interface';
import { UserService } from './../user.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private user: UserService,
              private modalService: NgbModal ,
              private fb: FormBuilder) { }

  get f() { return this.registerForm.controls; }

  closeResult = '';
  registerForm: FormGroup;
  submitted = false;
  UserList: User[]  = [];
  selectedAll: any;

  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  userdelete;

  onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
          return;
      } else {
        this.user.UserList.push(this.registerForm.value);
        this.onReset();
        this.removePhone(this);
      }
  }



  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
  delete(i) {
     this.UserList.splice(i, 1);
  }
  selectAll() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.UserList.length; i++) {
      this.UserList[i].selected = this.selectedAll;
    }
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addFieldValue(): void {
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {};
  }

  removePhone(index) {
      this.fieldArray.splice(index, 1);
}

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$|^\d{10}-\d{9}$/)]],
      address: ['', [Validators.required]],
      zip: ['', [ Validators.required, Validators.pattern(/^\d{5}$|^\d{5}-\d{4}$/)]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      phone2: ['', Validators.pattern(/^\d{10}$|^\d{10}-\d{9}$/)],
      selected : false
  });

    this.UserList = this.user.getStudents();
  }

}
