import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  constructor(private auth: AuthService) {}

  authorized$;

  ngOnInit() {
    this.authorized$ = this.auth.authStatus;
  }

  logout() {
    this.auth.logout();
  }

}
