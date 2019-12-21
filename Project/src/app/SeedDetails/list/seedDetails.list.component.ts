import { Component, OnInit } from '@angular/core';
import { seedDetailsService } from '../seedDetails.service';
import * as toastr from 'toastr'

@Component({
  selector: 'app-seedDetails-list',
  templateUrl:'./seedDetails.list.component.html',
  styleUrls: ['./seedDetails.list.component.css']
})

export class seedDetailsListComponent implements OnInit {
  seedDetailss: any[]
  service: seedDetailsService

  constructor(service: seedDetailsService) {
    this.service = service
    this.getseedDetails()
  }

  getseedDetails() {
    this.service.get()
      .subscribe((response) => {
        if (response['status'] == 'success') {
          this.seedDetailss = response['data']
        } else {
          alert('error occured:')
          console.log(response['error'])
        }
      })
  }

  onDelete(Seed_id: number) {
    this.service
      .deleteseedDetails(Seed_id)
      .subscribe(response => {
        if (response['status'] == 'success') {
          toastr.success('Deleted Seed successfully...')
          this.getseedDetails()
          
        } else {
          console.log(response['error'])
        }
      })
  }

  ngOnInit() { }
}

