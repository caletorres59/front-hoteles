import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.scss'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public user: User;
  public title:string;
  public status: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userServi: UserService
  ) { 

    this.title = 'Registro Agencia de viajes';
    this.user = new User("","","","","","","","",null);
  }

  ngOnInit() {
  }

  onSubmit(form){

    this._userServi.register(this.user).subscribe(
      response => {
        console.log(response);
        if(response.user && response.user._id){
          this.status = 'success';
          form.reset();
        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(<any>error)
      }
    )
  }

}
