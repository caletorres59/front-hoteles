import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from '../../../services/hotel.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public id:string ;
  public hotel:Hotel;

  constructor(private route: ActivatedRoute, private servHotel: HotelService ) { 
     this.hotel = new Hotel("","","","","","","","");
     const param = this.route.snapshot.paramMap.get('id');
     this.servHotel.getHotelById(param).subscribe(
      response => {
          this.hotel = response.hotel;
       },
       error => {
            console.log(error);
       }
     )
  }

  ngOnInit() {
    
  }

  onSubmit(form) {
   this.servHotel.updateHotel(this.hotel).subscribe(
     response => {
             console.log(response);
     },
     error => {
      console.log(error);
     }
   )
  }

}
