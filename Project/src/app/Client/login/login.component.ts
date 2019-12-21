import { Component, OnInit } from '@angular/core';
import { ClientService } from '../Client.service';
import * as toastr from 'toastr'



@Component({
  selector: 'app-Client-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class ClientLoginComponent implements OnInit {
  User_Email = ''
  User_Password = ''

  constructor(private ClientService: ClientService) { }

  ngOnInit() { }

  onLogin() {
    if (this.User_Email.length == 0) {
      toastr.error('Enter Valid Email')
    } else if (this.User_Password.length == 0) {
      toastr.error('Enter Valid Password')
    } else {
      this.ClientService
        .login(this.User_Email, this.User_Password)
        .subscribe(response => {
          if (response['status'] == 'success') {
            toastr.success('Authenticated ')
          } else {
            toastr.error(response['error'])
          }
        })
    }
  }

}
