import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  url = 'http://localhost:3000/restaurants';
  rootUrl = 'http://localhost:3000/';
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
getEditRestaurant(id) {
  return this.http.get(`${this.url}/${id}`);
}
updateRestaurant(id,data) {
  return this.http.put(`${this.url}/${id}`,data);
}
registerUser(data) {
  return this.http.post(this.rootUrl + 'users', data);
}
}
