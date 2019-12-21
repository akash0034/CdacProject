import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceproviderService {

  http: HttpClient
  url = 'http://localhost:4000/Serviceprovider'

  constructor(http: HttpClient) { 
    this.http=http
  }

  get() {
    return this.http.get(this.url)
  }

  

  addservicepr(Service_id:number, PerDayPrice: number,Instruction:string) {

    const body = {
      Service_id :Service_id,
      PerDayPrice :PerDayPrice,
      Instruction:Instruction
    }

    return this.http.post(this.url+'/add', body)
  }

  deleteservicepr(ServicePr_id: number) {
    return this.http.delete(this.url + '/' + ServicePr_id)
  }

}
