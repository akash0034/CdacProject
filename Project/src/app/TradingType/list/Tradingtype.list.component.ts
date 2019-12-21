import { Component, OnInit } from '@angular/core';
import { TradingtypeService } from '../Tradingtype.service';

@Component({
  selector: 'app-Tradingtype-list',
  templateUrl:'./Tradingtype.list.component.html',
  styleUrls: ['./Tradingtype.list.component.css']
})

export class TradingtypeListComponent implements OnInit {
  tradingtypes: any[]
  service: TradingtypeService

  constructor(service: TradingtypeService) {
    this.service = service
    this.getTradingType()
  }

  getTradingType() {
    this.service.get()
      .subscribe((response) => {
        if (response['status'] == 'success') {
          this.tradingtypes = response['data']
        } else {
          alert('error occured:')
          console.log(response['error'])
        }
      })
  }

  onDelete(TradingType_id: number) {
    this.service
      .deleteTradingType(TradingType_id)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.getTradingType()
        } else {
          console.log(response['error'])
        }
      })
  }

  ngOnInit() { }
}

