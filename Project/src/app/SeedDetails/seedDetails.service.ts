import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class seedDetailsService {

  http: HttpClient
  url = 'http://localhost:4000/seedDetails'

  constructor(http: HttpClient) { 
    this.http=http
  }

  get() {
    return this.http.get(this.url)
  }

  

  addseedDetails(Crop_id:number, Seed_Name: string,Seed_Price:number) {

    const body = {
    Crop_id :Crop_id,
    Seed_Name :Seed_Name,
    Seed_Price:Seed_Price
    }

    return this.http.post(this.url+'/add', body)
  }

  deleteseedDetails(Seed_id: number) {
    return this.http.delete(this.url + '/' + Seed_id)
  }

}
