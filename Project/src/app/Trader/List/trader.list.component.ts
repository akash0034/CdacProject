import { Component, OnInit } from '@angular/core';
import { TraderService } from '../Trader.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import * as toastr from 'toastr'

@Component({
  selector: 'app-trader-list',
  templateUrl: './trader.list.component.html',
  styleUrls: ['./trader.list.component.css']
})

export class TraderListComponent implements OnInit {
 
  Traders :any[]
  Service : TraderService
  

  constructor(Service: TraderService) {
    
    this.Service = Service

     this.getAllTrader()

     }
     getAllTrader(){
       this.Service.get()
      .subscribe((response) => {
        if (response['status'] == 'success') {
          this.Traders = response['data']
          //toastr.success('Client Added Successfully')
         
        } else {
          alert('error Occured :')
          console.log(response['error'])
        }
      })
    
  }



  
  onDelete(Tr_id: number) {
    this.Service
      .deleteTrader(Tr_id)
      .subscribe(response => {
        if (response['status'] == 'success') {
          toastr.success('Trader Deleted successfully...')
          this.getAllTrader()
        } else {
          console.log(response['error'])
        }
      })
  }

  ngOnInit() { }
}
