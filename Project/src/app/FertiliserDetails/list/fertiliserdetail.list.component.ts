import { Component, OnInit } from '@angular/core';
import { FertiliserdetailService } from '../Fertiliserdetail.service';

@Component({
  selector: 'app-fertiliserdetail-list',
  templateUrl:'./fertiliserdetail.list.component.html',
  styleUrls: ['./fertiliserdetail.list.component.css']
})

export class FertDetailListComponent implements OnInit {
  FertDetaliss: any[]
  service: FertiliserdetailService

  constructor(service: FertiliserdetailService) {
    this.service = service
    this.getFertDetails()
  }

  getFertDetails() {
    this.service.get()
      .subscribe((response) => {
        if (response['status'] == 'success') {
          this.FertDetaliss = response['data']
        } else {
          alert('error occured:')
          console.log(response['error'])
        }
      })
  }

  onDelete(Fertiliser_id: number) {
    this.service
      .deleteFertDetails(Fertiliser_id)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.getFertDetails()
        } else {
          console.log(response['error'])
        }
      })
  }

  ngOnInit() { }
}

