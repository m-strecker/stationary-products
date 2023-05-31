import { Component } from '@angular/core';
//import service
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stationary-products';
//create products property
  products: { id: number; type: string }[] = [];

//Inject service into component constructor & assign values to products property.
  constructor(private productService: ProductService)
  {
    this.products = this.productService.getStationaryProducts();
  }

}
