import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from '../restaurants.service';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.sass']
})
export class ListRestaurantComponent implements OnInit {

  constructor(private restaurant: RestaurantsService) { }
  collection: any = [];
  ngOnInit(): void {
    this.restaurant.getList().subscribe((result) => {
      console.warn(result);
      this.collection = result;
    });
  }
  deleteRestaurant(item) {
    this.collection.splice(item - 1 , 1  );
    this.restaurant.deleteRestaurant(item).subscribe((result) => {
      console.warn(result);
    });
  }

}
