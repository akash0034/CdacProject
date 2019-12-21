import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FertiliserdetailService {

  http: HttpClient
  url = 'http://localhost:4000/FertiliserDetails'

  constructor(http: HttpClient) {
    this.http = http
  }

  get() {
    return this.http.get(this.url)
  }


  addFertDetails(Crop_id: number, Fertiliser_Category: string, Fertiliser_Brand: string, Fertiliser_Oncrop: string,
    Fertiliser_Info: string, Fertiliser_Price: number, file: any,Fertiliser_name:string) {


    const body = new FormData()
console.log(Fertiliser_Price)
console.log(file)
    body.append('Crop_id', '' + Crop_id)
    body.append('Fertiliser_Category', Fertiliser_Category)
    body.append('Fertiliser_Brand', Fertiliser_Brand)
    body.append('Fertiliser_Oncrop', Fertiliser_Oncrop)
    body.append('Fertiliser_Info', Fertiliser_Info)
    body.append('Fertiliser_Price', '' + Fertiliser_Price)
    body.append('Fertiliser_Img', file)
    body.append('Fertiliser_name',Fertiliser_name)


    return this.http.post(this.url + '/add', body)
  }

  deleteFertDetails(Fertiliser_id: number) {
    return this.http.delete(this.url + '/' + Fertiliser_id)
  }
}
