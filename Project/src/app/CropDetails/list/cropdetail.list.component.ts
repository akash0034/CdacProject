import { Component, OnInit } from '@angular/core';
import { CropDetailsService } from '../cropdetail.service';

@Component({
  selector: 'app-cropdetail-list',
  templateUrl:'./cropdetail.list.component.html',
  styleUrls: ['./cropdetail.list.component.css']
})

export class CropDetailListComponent implements OnInit {
  cropDetaliss: any[]
  service: CropDetailsService

  constructor(service: CropDetailsService) {
    this.service = service
    this.getCropDetails()
  }

  getCropDetails() {
    this.service.get()
      .subscribe((response) => {
        if (response['status'] == 'success') {
          this.cropDetaliss = response['data']
        } else {
          alert('error occured:')
          console.log(response['error'])
        }
      })
  }

  onDelete(Crop_id: number) {
    this.service
      .deleteCropDetails(Crop_id)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.getCropDetails()
        } else {
          console.log(response['error'])
        }
      })
  }

  ngOnInit() { }
}

