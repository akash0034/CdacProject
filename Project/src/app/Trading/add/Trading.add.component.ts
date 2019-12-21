import { Component, OnInit } from '@angular/core';
import {TradingService } from '../Trading.service';
import * as toastr from 'toastr'
import { Router } from '@angular/router';
import { CropDetailsService } from '../../CropDetails/cropdetail.service';
import { ClientService } from '../../Client/Client.service';
import { TraderService } from '../../Trader/Trader.service';
import { FertiliserdetailService } from 'src/app/FertiliserDetails/Fertiliserdetail.service';
import { seedDetailsService } from '../../SeedDetails/seedDetails.service';
import { ServicesService } from '../../Services/services.service';
import { TradingtypeService } from '../../TradingType/Tradingtype.service';

@Component({
  selector: 'app-Trading-add',
  templateUrl:'./Trading.add.component.html',
  styleUrls: ['./Trading.add.component.css']
})

export class TradingAddComponent implements OnInit {
  crops =[]
  Users=[]
  Traders=[]
  Ferts=[]
  seeds=[]
  Servicess=[]
  Trtypes=[]
   
  Tr_id:number
  TradingType_id:number
  Seed_id:number
  Fertiliser_id:number
  Crop_id:number
  Service_id:number
  User_id:number
  Trading_price:number
  

  constructor(
    private router: Router,
    private TradingService: TradingService ,
    private CropDetailsService: CropDetailsService,
    private ClientService: ClientService,
    private TraderService:TraderService,
    private FertiliserdetailService:FertiliserdetailService,
    private seedDetailsService:seedDetailsService,
    private ServicesService:ServicesService,
    private TradingtypeService:TradingtypeService
    
) {
      this.CropDetailsService
      .get()
      .subscribe(response=>{
        if(response['status']== 'success'){
        this.crops =response['data']
        this.Crop_id = this.crops[0].id
      }else {
        console.log(response['error'])
      }
      })

      this.ClientService
      .get()
      .subscribe(response=>{
        if(response['status']== 'success'){
        this.Users =response['data']
        this.User_id = this.Users[0].id
      }else {
        console.log(response['error'])
      }
      })
      this.TraderService
      .get()
      .subscribe(response=>{
        if(response['status']== 'success'){
        this.Traders =response['data']
        this.Tr_id = this.Traders[0].id
      }else {
        console.log(response['error'])
      }
      })
      this.FertiliserdetailService
      .get()
      .subscribe(response=>{
        if(response['status']== 'success'){
        this.Ferts =response['data']
        this.Fertiliser_id = this.Ferts[0].id
      }else {
        console.log(response['error'])
      }
      })
      this.seedDetailsService
      .get()
      .subscribe(response=>{
        if(response['status']== 'success'){
        this.seeds =response['data']
        this.Seed_id = this.seeds[0].id
      }else {
        console.log(response['error'])
      }
      })
      this.ServicesService
      .get()
      .subscribe(response=>{
        if(response['status']== 'success'){
        this.Servicess =response['data']
        this.Service_id = this.Servicess[0].id
      }else {
        console.log(response['error'])
      }
      })
      this.TradingtypeService
      .get()
      .subscribe(response=>{
        if(response['status']== 'success'){
        this.Trtypes =response['data']
        this.TradingType_id = this.Trtypes[0].id
      }else {
        console.log(response['error'])
      }
      })
  
  }

  ngOnInit() { }

  onTradingAdd() {
    this.TradingService
      .addTrading(
        this.Tr_id,
        this.TradingType_id,
        this.Seed_id,
        this.Fertiliser_id,
        this.Crop_id,
        this.Service_id,
        this.User_id,
        this.Trading_price)
      .subscribe(response => {
        if (response['status'] == 'success') {
          toastr.success('Trading successfully')
          this.router.navigate(['/Trading-list'])
        } else {
          console.log(response['error'])
        }
      })
  }
}
