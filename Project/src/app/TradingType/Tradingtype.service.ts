import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TradingtypeService {

  http: HttpClient
  url = 'http://localhost:4000/TradingType'

  constructor(http: HttpClient) { 
    this.http=http
  }

  get() {
    return this.http.get(this.url)
  }

  addTradingType(Trader_Name: string) {

    console.log(Trader_Name)
    const body = {
      Trader_Name: Trader_Name
    }

    return this.http.post(this.url+'/add', body)
  }

  deleteTradingType(TradingType_id: number) {
    return this.http.delete(this.url + '/' + TradingType_id)
  }

}
