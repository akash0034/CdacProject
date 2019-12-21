import { Component, OnInit } from '@angular/core';
import { ServiceproviderService } from '../Serviceprovider.service';
import * as toastr from 'toastr'
import { Router } from '@angular/router';
import { ServicesService } from '../../Services/services.service';

@Component({
  selector: 'app-Serviceprovider-add',
  templateUrl:'./Serviceprovider.add.component.html',
  styleUrls: ['./Serviceprovider.add.component.css']
})

export class ServicePrAddComponent implements OnInit {
  Servicepr =[]
   
    Service_id : number;
    PerDayPrice :number
    Instruction=''
  

  constructor(
    private router: Router,
    private ServiceproviderService: ServiceproviderService,
    private ServicesService: ServicesService) {
      this.ServicesService
      .get()
      .subscribe(response=>{
        if(response['status']== 'success'){
        this.Servicepr =response['data']
        this.Service_id = this.Servicepr[0].id
      }else {
        console.log(response['error'])
      }
      }) 
  }

  ngOnInit() { }

  onServiceprAdd() {
    this.ServiceproviderService
      .addservicepr(this.Service_id,this.PerDayPrice,this.Instruction)
      .subscribe(response => {
        if (response['status'] == 'success') {
          toastr.success('added Sevice Provider successfully')
          this.router.navigate(['/servicepr-list'])
        } else {
          console.log(response['error'])
        }
      })
  }
}
