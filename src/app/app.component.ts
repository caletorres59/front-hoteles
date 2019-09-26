import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ UserService ]
})
export class AppComponent implements OnInit, DoCheck {
  public title:string;
  public identity;
 
  constructor(
    private userSer: UserService
  ){
    this.title  = 'Reserva Hoteles';
  }

  ngOnInit(){
    this.identity = this.userSer.getIdentity();
    console.log(this.identity);
  }

  ngDoCheck(){
    this.identity = this.userSer.getIdentity();
  }
}
