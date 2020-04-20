import { Component, OnInit } from '@angular/core';
import { HardcodeauthService } from '../shared/service/auth/hardcodeauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // constructor(public authService: HardcodeauthService) { }
  constructor(public authService: HardcodeauthService, private router: Router) { }
  
  

  authService_logout() {
    this.router.navigate(['login']);
    return this.authService.logout()
  }


  ngOnInit(): void {
  }

}
