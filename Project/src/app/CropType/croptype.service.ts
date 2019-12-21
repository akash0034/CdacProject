import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CroptypeService {

  http: HttpClient
  url = 'http://localhost:4000/CropType'

  constructor(http: HttpClient) { 
    this.http=http
  }

  get() {
    return this.http.get(this.url)
  }

  addCropType(CropType_Name: string) {

    console.log(CropType_Name)
    const body = {
      CropType_Name: CropType_Name
    }

    return this.http.post(this.url+'/add', body)
  }

  deleteCropType(CropType_id: number) {
    return this.http.delete(this.url + '/' + CropType_id)
  }

}
