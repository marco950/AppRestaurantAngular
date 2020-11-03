import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  url = 'http://localhost:3000/restaurants';
  constructor(private http: HttpClient ) { }
  getList() {
   return this.http.get(this.url);
  }
saveResto(data) {
  return this.http.post(this.url, data);
}
deleteRestaurant(id) {
  return this.http.delete(`${this.url}/${id}`);
}
}