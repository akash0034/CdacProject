import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TradingService {

  http: HttpClient
  url = 'http://localhost:4000/Trading'

  constructor(http: HttpClient) { 
    this.http=http
  }

  get() {
    return this.http.get(this.url)
  }
  

  addTrading(Tr_id:number, TradingType_id: number,Seed_id:number,Fertiliser_id:number,
    Crop_id:number,Service_id: number, User_id: number,Trading_price:number) {

    const body = {
      Tr_id:Tr_id,
      TradingType_id:TradingType_id,
      Seed_id:Seed_id,
      Fertiliser_id:Fertiliser_id,
      Crop_id:Crop_id,
      Service_id:Service_id,
      User_id:User_id,
      Trading_price:Trading_price
    }

    return this.http.post(this.url+'/add', body)
  }

  deleteTrading(Seed_id: number) {
    return this.http.delete(this.url + '/' + Seed_id)
  }

}
