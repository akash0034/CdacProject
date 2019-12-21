import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import * as toastr from 'toastr'
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-add',
  templateUrl:'./services.add.component.html',
  styleUrls: ['./services.add.component.css']
})

export class ServiceAddComponent implements OnInit {

  Services_Name = ''

  constructor(
    private router: Router,
    private ServicesService: ServicesService) {

    
  }

  ngOnInit() { }

  onserviceAdd() {
    this.ServicesService
      .addservice(this.Services_Name)
      .subscribe(response => {
        if (response['status'] == 'success') {
          toastr.success('added Service successfully')
          this.router.navigate(['/services-list'])
        } else {
          console.log(response['error'])
        }
      })
  }
}
