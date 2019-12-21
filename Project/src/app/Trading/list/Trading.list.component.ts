import { Component, OnInit } from '@angular/core';
import { TradingService } from '../Trading.service';
import * as toastr from 'toastr'

@Component({
  selector: 'app-Trading-list',
  templateUrl:'./Trading.list.component.html',
  styleUrls: ['./Trading.list.component.css']
})

export class TradingListComponent implements OnInit {
  Tradings: any[]
  service: TradingService

  constructor(service: TradingService) {
    this.service = service
    this.getTradingDetails()
  }

  getTradingDetails() {
    this.service.get()
      .subscribe((response) => {
        if (response['status'] == 'success') {
          this.Tradings = response['data']
        } else {
          alert('error occured:')
          console.log(response['error'])
        }
      })
  }

  onDelete(Trading_id: number) {
    this.service
      .deleteTrading(Trading_id)
      .subscribe(response => {
        if (response['status'] == 'success') {
          toastr.success('Deleted Trade successfully...')
          this.getTradingDetails()
          
        } else {
          console.log(response['error'])
        }
      })
  }

  ngOnInit() { }
}

