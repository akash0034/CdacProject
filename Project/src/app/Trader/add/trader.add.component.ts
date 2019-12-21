import { Component, OnInit } from '@angular/core';
import { TraderService } from '../Trader.service';
import * as toastr from 'toastr'
import { Router } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-trader-add',
  templateUrl: './trader.add.component.html',
  styleUrls: ['./trader.add.component.css']
})

export class TraderAddComponent implements OnInit {
  
  
  
        Tr_name=''
        Tr_Address =''
        Tr_Email =''
        Tr_Phone=''
        Tr_Catagory=''
        Tr_password =''
  


  constructor(
    private router: Router,
    private TraderService: TraderService) { }

  ngOnInit() { }

 
  Onregister() {
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
          toastr.success('added Trader successfully')
          this.router.navigate(['/Trader-list'])
        } else {

          toastr.error(response['error'])
          console.log(response['error'])
        }
      })
    }
  }
}


