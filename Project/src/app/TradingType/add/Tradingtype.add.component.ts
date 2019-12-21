import { Component, OnInit } from '@angular/core';
import {TradingtypeService } from '../Tradingtype.service';
import * as toastr from 'toastr'
import { Router } from '@angular/router';

@Component({
  selector: 'app-Tradingtype-register',
  templateUrl:'./Tradingtype.add.component.html',
  styleUrls: ['./Tradingtype.add.component.css']
})

export class TradingTypeAddComponent implements OnInit {

  Trader_Name = ''

  constructor(
    private router: Router,
    private TradingtypeService: TradingtypeService) {

    
  }

  ngOnInit() { }

  onTradingTypeAdd() {
    this.TradingtypeService
      .addTradingType(this.Trader_Name)
      .subscribe(response => {
        if (response['status'] == 'success') {
          toastr.success('added Crop Type successfully')
          this.router.navigate(['/tradingtype-list'])
        } else {
          console.log(response['error'])
        }
      })
  }
}
