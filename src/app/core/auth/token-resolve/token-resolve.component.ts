import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-token-resolve',
  template: 'Fetching token...'
})
export class TokenResolveComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.code) {
        this.authService.getTokenFromApi(params.code);
      } else {
        this.authService.login();
      }
    });
  }
}
