import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CropDetailsService {

  http: HttpClient
  url = 'http://localhost:4000/CropDetails'

  constructor(http: HttpClient) {
    this.http = http
  }

  get() {
    return this.http.get(this.url)
  }

  addCropDetails(CropType_id: number, Crop_Sesaon: string, Crop_Category: string, Crop_Name: string,
    Crop_Info: string, Crop_Price: number, file: any) {


    const body = new FormData()
console.log(Crop_Price)
console.log(file)
    body.append('CropType_id', '' + CropType_id)
    body.append('Crop_Sesaon', Crop_Sesaon)
    body.append('Crop_Category', Crop_Category)
    body.append('Crop_Name', Crop_Name)
    body.append('Crop_Info', Crop_Info)
    body.append('Crop_Price', '' + Crop_Price)
    body.append('Crop_Img', file)


    return this.http.post(this.url + '/add', body)
  }

  deleteCropDetails(Crop_id: number) {
    return this.http.delete(this.url + '/' + Crop_id)
  }
}
