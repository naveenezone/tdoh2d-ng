import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthService } from '../shared/service/auth/basic-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // constructor(public authService: HardcodeauthService) { }
  constructor(public authService: BasicAuthService, private router: Router) { }
  
  

  authService_logout() {
    this.router.navigate(['login']);
    return this.authService.logout()
  }


  ngOnInit(): void {
  }

}
