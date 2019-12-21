import { Component, OnInit } from '@angular/core';
import { ClientService } from '../Client.service';
import * as toastr from 'toastr'
import { Router } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-client-add',
  templateUrl: './client.add.component.html',
  styleUrls: ['./client.add.component.css']
})

export class ClientAddComponent implements OnInit {
  
  
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

 
  Onregister() {
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
          toastr.success('added Client successfully')
          this.router.navigate(['/Client-List'])
        } else {

          toastr.error(response['error'])
          console.log(response['error'])
        }
      })
    }
  }
}


