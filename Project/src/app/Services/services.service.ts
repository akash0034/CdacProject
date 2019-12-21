import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServicesService {

  http: HttpClient
  url = 'http://localhost:4000/Servises'
  constructor(http: HttpClient) { 
    this.http=http
  }

  get() {
    return this.http.get(this.url)
  }

  addservice(Services_Name: string) {

    console.log(Services_Name)
    const body = {
      Services_Name: Services_Name
    }

    return this.http.post(this.url+'/add', body)
  }

  deleteservices(Service_id: number) {
    return this.http.delete(this.url + '/' + Service_id)
  }

}
