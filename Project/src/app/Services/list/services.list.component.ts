import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-services-list',
  templateUrl:'./services.list.component.html',
  styleUrls: ['./services.list.component.css']
})

export class ServiceListComponent implements OnInit {
  servicess: any[]
  service: ServicesService

  constructor(service: ServicesService) {
    this.service = service
    this.getservices()
  }

  getservices() {
    this.service.get()
      .subscribe((response) => {
        if (response['status'] == 'success') {
          this.servicess = response['data']
        } else {
          alert('error occured:')
          console.log(response['error'])
        }
      })
  }

  onDelete(Service_id: number) {
    this.service
      .deleteservices(Service_id)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.getservices()
        } else {
          console.log(response['error'])
        }
      })
  }

  ngOnInit() { }
}

