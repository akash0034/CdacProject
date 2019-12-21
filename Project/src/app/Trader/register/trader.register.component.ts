import { Component, OnInit } from '@angular/core';
import { TraderService } from '../Trader.service';
import * as toastr from 'toastr'
import { Router } from '@angular/router';

@Component({
  selector: 'app-trader-register',
  templateUrl: './trader.register.component.html',
  styleUrls: ['./trader.register.component.css']
})

export class TraderRegisterComponent implements OnInit {

  Tr_name=''
  Tr_Address =''
  Tr_Email=''
  Tr_Phone=''
  Tr_Catagory=''
  Tr_password=''


  constructor(
    private router: Router,
    private TraderService: TraderService) { }

  ngOnInit() { }

  register() {
    if (this.Tr_name.length == 0) {
      toastr.error('Enter Valid Username')
    } else if (this.Tr_Email.length == 0) {
      toastr.error('Enter Valid Email')
    } else if (this.Tr_password.length == 0) {
      toastr.error('Enter Valid Password')
    } else {

      this.TraderService
        .register(this.Tr_name, this.Tr_Address, 
           this.Tr_Email, this.Tr_Phone, this.Tr_Catagory, this.Tr_password)
        .subscribe(response => {
          if (response['status'] == 'success') {
            toastr.success('Registered successfully')
            this.router.navigate(['/Trader-login'])
          } else {
            toastr.error(response['error'])
          }
        })
    }
  }
}

