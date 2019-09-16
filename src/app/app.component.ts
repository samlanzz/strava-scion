import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  auth = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    if (this.authService.getTokenFromLocalStorage()) {
      this.auth = true;
    }
  }
}
