import { Injectable } from '@angular/core';
//import product array
import { stationaryProducts } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getStationaryProducts(): { id: number; type: string }[] {
  return stationaryProducts;
  }

  constructor() { }
}
