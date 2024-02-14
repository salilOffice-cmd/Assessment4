import { CarsAPIService } from 'src/app/Services/cars-api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  gotCars: any[] | undefined;

  constructor(private carsAPIService: CarsAPIService){
    this.gotCars = carsAPIService.localCart 
  }

  sendToCartAPI(cartItems: any, license: string, date: any, time: any){


    
    cartItems.forEach((element : any) => {
      console.log(element);
      element.licenseNumber = license;
      element.date = date;
      element.time = time;
    });

    // console.log(cartItems);
    
    this.carsAPIService.addBookingDetailsAPI(cartItems).subscribe(response => {
      if(response._statusCode === 200){
        alert(response._message);
      }
    })
  }


}
