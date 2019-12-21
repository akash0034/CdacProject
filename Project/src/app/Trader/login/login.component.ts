import { Component, OnInit } from '@angular/core';
import { TraderService } from '../Trader.service';
import * as toastr from 'toastr'



@Component({
  selector: 'app-Trader-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class TraderLoginComponent implements OnInit {
  Tr_Email = ''
  Tr_password = ''

  constructor(private TraderService: TraderService) { }

  ngOnInit() { }

  onLogin() {
    if (this.Tr_Email.length == 0) {
      toastr.error('Enter Valid Email')
    } else if (this.Tr_password.length == 0) {
      toastr.error('Enter Valid Password')
    } else {
      this.TraderService
        .login(this.Tr_Email, this.Tr_password)
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
