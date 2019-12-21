import { Component, OnInit } from '@angular/core';
import { CroptypeService } from '../croptype.service';
import * as toastr from 'toastr'
import { Router } from '@angular/router';

@Component({
  selector: 'app-croptype-register',
  templateUrl:'./croptype.add.component.html',
  styleUrls: ['./croptype.add.component.css']
})

export class CropTypeAddComponent implements OnInit {

  CropType_Name = ''

  constructor(
    private router: Router,
    private CroptypeService: CroptypeService) {

    
  }

  ngOnInit() { }

  onCropTypeAdd() {
    this.CroptypeService
      .addCropType(this.CropType_Name)
      .subscribe(response => {
        if (response['status'] == 'success') {
          toastr.success('added Crop Type successfully')
          this.router.navigate(['/croptype-list'])
        } else {
          console.log(response['error'])
        }
      })
  }
}
