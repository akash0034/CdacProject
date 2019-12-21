import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientService {

  http: HttpClient

  url = 'http://localhost:4000/ClientRegDetails'

  constructor( http: HttpClient) { 
    this.http=http
  }

  getAllClient(){
    return this.http.get(this.url)
  }
  get(){
    return this.http.get(this.url)
  }
  
  
  
  login(User_Email: string, User_Password: string) {
    const body = {
      User_Email: User_Email,
      User_Password: User_Password
    }

    return this.http.post(this.url + '/login', body)
  }

  register(User_Name: string, User_Email: string,
    User_Phone:string,User_Gender:string,
    User_State:string,User_Dist:string,User_City:string,User_Pin:number,
    User_Password:string) {
   
   
      const body = {
    User_Name:User_Name,
    User_Email:User_Email,
    User_Phone:User_Phone,
    User_Gender:User_Gender,
  
    User_State:User_State,
    User_Dist:User_Dist,
    User_City:User_City,
    User_Pin:User_Pin,
    User_Password:User_Password,
  }


    /*const body = new FormData 
    body.append('User_Name',User_Name)
    body.append('User_Email',User_Email)
    body.append('User_Phone',User_Phone)
    body.append('User_Gender',User_Gender)
    body.append('User_State',User_State)
    body.append('User_Dist',User_Dist)
    body.append('User_City',User_City)
    body.append('User_Pin',''+User_Pin)
    body.append('User_Password',User_Password)*/

    return this.http.post(this.url + '/register', body)
  }

  deleteClient(User_id: number) {
    return this.http.delete(this.url + '/' + User_id)
  }
}
