import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../restaurants.service'
@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.sass']
})
export class UpdateRestaurantComponent implements OnInit {

  alert: boolean = false;
  editRestaurant = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')

  });
  constructor(private router: ActivatedRoute, private restaurant: RestaurantsService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this.restaurant.getEditRestaurant(this.router.snapshot.params.id).subscribe(
      (result) => {
        this.editRestaurant = new FormGroup({
          name: new FormControl(result["name"]),
          address: new FormControl(result["address"]),
          email: new FormControl(result["email"])
        });
      });
  }

  collection(){
   console.warn(this.editRestaurant.value)
   this.restaurant.updateRestaurant(this.router.snapshot.params.id,this.editRestaurant.value).subscribe((result)=>
    this.alert = true
   )
  }
  closeAlert(){
    this.alert = false;
  }
}
