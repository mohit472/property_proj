import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  propertyForm: any = FormGroup;
  propertyList: any = [];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createPropertyForm();
  }

  // create property form
  createPropertyForm() {
    this.propertyForm = this.fb.group({
      property_name: ['', Validators.compose([Validators.required])],
      property_description: ['', Validators.compose([Validators.required])],
      property_size: ['', Validators.compose([Validators.required])],
    });
  }

  get f() { return this.propertyForm.controls; }

  // add property function
  addProperty(data: any) {
    if (data.property_description == '' || data.property_name == '' || data.property_size == '') {
      alert("Please fill all the details");
      return
    }
    this.propertyList.push({
      property_description: data.property_description,
      property_name: data.property_name,
      property_size: data.property_size
    });

    this.propertyForm.markAsPristine();
    this.propertyForm.markAsUntouched();
    this.propertyForm.updateValueAndValidity();
  }

  // delete property function
  deleteProperty(index: any) {
    this.propertyList.splice(index, 1)
  }

}



