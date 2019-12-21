import { Component, OnInit } from '@angular/core';
import { ClientService } from '../Client.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import * as toastr from 'toastr'

@Component({
  selector: 'app-client-list',
  templateUrl: './client.list.component.html',
  styleUrls: ['./client.list.component.css']
})

export class ClientListComponent implements OnInit {
 
  Clients :any[]
  Service : ClientService
  

  constructor(Service: ClientService) {
    
    this.Service = Service

     this.getAllClient()

     }
     getAllClient(){
       this.Service.get()
      .subscribe((response) => {
        if (response['status'] == 'success') {
          this.Clients = response['data']
          //toastr.success('Client Added Successfully')
         
        } else {
          alert('error Occured :')
          console.log(response['error'])
        }
      })
    
  }



  
  onDelete(User_id: number) {
    this.Service
      .deleteClient(User_id)
      .subscribe(response => {
        if (response['status'] == 'success') {
          toastr.success('Client Deleted successfully...')
          this.getAllClient()
        } else {
          console.log(response['error'])
        }
      })
  }

  ngOnInit() { }
}
