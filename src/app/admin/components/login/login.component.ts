import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ UserService ]
})
export class LoginComponent implements OnInit {

  public title: string;
  public user: User;
  public status: string;
  public identity;
  public token;

  constructor(
    private servUser: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.title = 'identificate';
    this.user = new User("","","","","","","","",null);
  }

  ngOnInit() {
  }

  onSubmit(form){
    
    this.servUser.signUp(this.user).subscribe(
      response => {
              this.identity = response.user;
              if(!this.identity || !this.identity._id){
                this.status = "error";
              }else{
                this.status = "success";

                //persisto la sesion

                localStorage.setItem('identity', JSON.stringify(this.identity));

                //get token
                this.getToken();

                this._router.navigateByUrl('/dashboard');
              }
              console.log(response);
      },
      error => {
        var errorMessagge = <any>error;
        if(errorMessagge != null){
          this.status = 'error';
        }
      }
    )
  }

   getToken(){
    this.servUser.signUp(this.user,'true').subscribe(
      response => {
              this.token = response.token;
              if(this.token.length <= 0){
                this.status = "error";
              }else{
                this.status = "success";

                //persistir el token
               localStorage.setItem('token', JSON.stringify(this.token));

                //get token
              }
              console.log(response);
      },
      error => {
        var errorMessagge = <any>error;
        if(errorMessagge != null){
          this.status = 'error';
        }
      }
    )
  }

}
