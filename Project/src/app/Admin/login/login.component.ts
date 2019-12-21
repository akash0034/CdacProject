import { Component, OnInit } from '@angular/core';
import * as toastr from 'toastr'

import { Router } from '@angular/router';

@Component({
  selector: 'app-Admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class AdminLoginComponent implements OnInit {
  Email = ''
  Password = ''

  constructor(private router:Router) { }

  ngOnInit() { }

  onLogin() {
    if (this.Email.length == 0) {
      toastr.error('Enter Valid Email')
    } else if (this.Password.length == 0) {
      toastr.error('Enter Valid Password')
    } else {
      if (this.Email == 'admin@admin.com' && this.Password=='admin123') {
        toastr.success('authenticated')
        this.router.navigate(['/adminHome'])

      } else {
        toastr.error("Please Enter Correct Email & Password")
      }
    }
  }

}
