import { Component, OnInit } from '@angular/core';
import { FertiliserdetailService } from '../Fertiliserdetail.service';
import * as toastr from 'toastr'
import { Router } from '@angular/router';

@Component({
  selector: 'app-fertiliserdetail-add',
  templateUrl:'./fertiliserdetail.add.component.html',
  styleUrls: ['./fertiliserdetail.add.component.css']
})

export class FertDetailAddComponent implements OnInit {

  
    Crop_id: number
    Fertiliser_Category='' 
    Fertiliser_Brand =''
    Fertiliser_Oncrop=''
    Fertiliser_Info=''
    Fertiliser_Price:number
    Fertiliser_Img: any
    Fertiliser_name=''


  constructor(
    private router: Router,
    private FertiliserdetailService: FertiliserdetailService) {

    
  }

  ngOnInit() { }

  onSelectFile(event) {
    this.Fertiliser_Img = event.target.files[0]
  }


  onFertAdd() {
    this.FertiliserdetailService
      .addFertDetails(this.Crop_id,this.Fertiliser_Category,this.Fertiliser_Brand,this.Fertiliser_Oncrop,this.Fertiliser_Info,this.Fertiliser_Price,this.Fertiliser_Img,this.Fertiliser_name)
      .subscribe(response => {
        if (response['status'] == 'success') {
          toastr.success('Fertiliser Added successfully')
          this.router.navigate(['/Fert-List'])
        } else {
          console.log(response['error'])
        }
      })
  }
}
