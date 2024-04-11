import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/Services/AuthService (2)';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private  authService: AuthService,private router:Router) {}
  sign():void{
    this.authService.doGoogleLogin().then(()=>{
      console.log("Logged in");
      this.router.navigate(['/members']);
  })

}
}
