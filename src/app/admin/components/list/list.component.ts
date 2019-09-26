import { Component, OnInit } from '@angular/core';
import {HotelService} from '../../../services/hotel.service';
import { Hotel } from '../../../models/hotel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public status:boolean = false;
  public message:string = '';
  public hoteles: Hotel[];
  constructor(private servHotel: HotelService) {
    this.servHotel.getHotels().subscribe(
      response =>{
         this.hoteles =  response.hotels;
         console.log(this.hoteles);
      },
      error => {

        this.message = error.error.message;
        this.status = true;
      }
    )
   }

  ngOnInit() {


  }

  editHotel(hotel:Hotel){
    console.log('dede');
    console.log(hotel);
  }

}
