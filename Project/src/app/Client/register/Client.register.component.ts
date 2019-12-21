import { Component, OnInit } from '@angular/core';
import { ClientService } from '../Client.service';
import * as toastr from 'toastr'
import { Router } from '@angular/router';

@Component({
  selector: 'app-Client-register',
  templateUrl: './Client.register.component.html',
  styleUrls: ['./Client.register.component.css']
})

export class ClientRegisterComponent implements OnInit {

  User_Name = ''
  User_Email=''
  User_Password=''
  User_Phone = ''
  User_Gender = ''
  User_State = ''
  User_Dist = ''
  User_City = ''
  User_Pin :number

  constructor(
    private router: Router,
    private ClientService: ClientService) { }

  ngOnInit() { }

  register() {
    if (this.User_Name.length == 0) {
      toastr.error('Enter Valid Username')
    } else if (this.User_Email.length == 0) {
      toastr.error('Enter Valid Email')
    } else if (this.User_Password.length == 0) {
      toastr.error('Enter Valid Password')
    } else {

      this.ClientService
        .register(this.User_Name, this.User_Email, 
           this.User_Phone, this.User_Gender, this.User_State, 
           this.User_Dist, this.User_City, this.User_Pin,this.User_Password)
        .subscribe(response => {
          if (response['status'] == 'success') {
            toastr.success('Registered successfully')
            this.router.navigate(['/Client-login'])
          } else {
            toastr.error(response['error'])
          }
        })
    }
  }
}

