import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {RestaurantsService} from '../restaurants.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.sass']
})
export class AddRestaurantComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  alert: boolean = false;
  addRestaurant = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')

  });
  constructor(private restourant: RestaurantsService) {
   }

  ngOnInit(): void {
  }

  collectionRestaurants() {
  this.restourant.saveResto(this.addRestaurant.value).subscribe((result) => {
    this.alert = true;
    this.addRestaurant.reset({});
  });
  }
  closeAlert() {
    this.alert = false;
  }
}
