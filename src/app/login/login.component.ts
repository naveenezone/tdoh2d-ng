import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthService } from '../shared/service/auth/basic-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  invalidLogin = false;


  constructor(private authService: BasicAuthService, private router: Router) { }


  ngOnInit(): void {
  }

  handleLogin() {

    this.authService.authenticate(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['welcome', this.username]);
        this.invalidLogin = false;
      }, error => {
        console.log(error);
        this.invalidLogin = true;
      }
    )


  }

}
