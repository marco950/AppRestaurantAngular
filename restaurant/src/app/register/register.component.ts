import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  alert: boolean = false;
  register = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')

  }); 
  constructor(private restaurant: RestaurantsService) { }

  ngOnInit() {
  }
  collection() {
    console.warn(this.register.value)
    this.restaurant.registerUser(this.register.value).subscribe((result)=>
    {
      this.alert=true
    })
    }
  closeAlert() {
    this.alert = false;
  }
}
