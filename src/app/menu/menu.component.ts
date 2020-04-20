import { Component, OnInit } from '@angular/core';
import { HardcodeauthService } from '../shared/service/auth/hardcodeauth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public authService: HardcodeauthService) { }

  authService_logout() {
    return this.authService.logout()
  }


  ngOnInit(): void {
  }

}
