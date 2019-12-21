import { Component, OnInit } from '@angular/core';
import { ServiceproviderService } from '../Serviceprovider.service';
import * as toastr from 'toastr'

@Component({
  selector: 'app-Serviceprovider-list',
  templateUrl:'./Serviceprovider.list.component.html',
  styleUrls: ['./Serviceprovider.list.component.css']
})

export class ServicePrListComponent implements OnInit {
  Servicepr: any[]
  service: ServiceproviderService

  constructor(service: ServiceproviderService) {
    this.service = service
    this.addservicepr()
  }

  addservicepr() {
    this.service.get()
      .subscribe((response) => {
        if (response['status'] == 'success') {
          this.Servicepr = response['data']
        } else {
          alert('error occured:')
          console.log(response['error'])
        }
      })
  }

  onDelete(ServicePr_id: number) {
    this.service
      .deleteservicepr(ServicePr_id)
      .subscribe(response => {
        if (response['status'] == 'success') {
          toastr.success('Deleted Service Provider successfully...')
          this.addservicepr()
          
        } else {
          console.log(response['error'])
        }
      })
  }

  ngOnInit() { }
}

