import { Component } from '@angular/core';
import { CarsAPIService } from 'src/app/Services/cars-api.service';

@Component({
  selector: 'app-rent-cars',
  templateUrl: './rent-cars.component.html',
  styleUrls: ['./rent-cars.component.css']
})
export class RentCarsComponent {
  gotCars: any[] = [];

  constructor(private carsAPIService: CarsAPIService){
    this.fetchCars();
  }


  fetchCars(){
    this.carsAPIService.getCarsByCategoryAPI("Rent").subscribe(response => {

      if(response.length > 0){
        this.gotCars = response;
      }
    })
  }


  cartClick(gotCar: any){
    this.carsAPIService.addToLocalCart(gotCar);
    alert(`${gotCar.carName} added to cart`)
  }
}
