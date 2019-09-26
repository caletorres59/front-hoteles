import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../../models/hotel';
import { from } from 'rxjs';
import {HotelService} from '../../../services/hotel.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public hotel:Hotel;
  constructor(
    private servHotel: HotelService
  ) {
      this.hotel = new Hotel("","","","","","","","");
   }

  ngOnInit() {
  }

  onSubmit(form){
     this.servHotel.addHotel(this.hotel).subscribe(
       response => {
          console.log(response);
       },
       error => {
        console.log(error);
       }
     )
  }

}
