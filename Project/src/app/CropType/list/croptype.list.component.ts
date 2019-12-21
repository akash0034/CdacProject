import { Component, OnInit } from '@angular/core';
import { CroptypeService } from '../croptype.service';

@Component({
  selector: 'app-croptype-list',
  templateUrl:'./croptype.list.component.html',
  styleUrls: ['./croptype.list.component.css']
})

export class CroptypeListComponent implements OnInit {
  croptypes: any[]
  service: CroptypeService

  constructor(service: CroptypeService) {
    this.service = service
    this.getCropType()
  }

  getCropType() {
    this.service.get()
      .subscribe((response) => {
        if (response['status'] == 'success') {
          this.croptypes = response['data']
        } else {
          alert('error occured:')
          console.log(response['error'])
        }
      })
  }

  onDelete(CropType_id: number) {
    this.service
      .deleteCropType(CropType_id)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.getCropType()
        } else {
          console.log(response['error'])
        }
      })
  }

  ngOnInit() { }
}

