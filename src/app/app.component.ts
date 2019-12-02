import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './core/auth/auth.service';
import { WorkbenchRouter, WorkbenchService } from '@scion/workbench';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  auth = false;
  private _destroy$ = new Subject<void>();

  constructor(private authService: AuthService,
              workbench: WorkbenchService,
              translate: TranslateService,
              wbRouter: WorkbenchRouter) {
    translate.setDefaultLang('en');
    translate.use('en');

    workbench.views$
      .pipe(takeUntil(this._destroy$))
      .subscribe(views => {
        if (views.length === 0) {
          wbRouter.navigate(['/statistics']);
        }
      });
  }

  ngOnInit(): void {
    if (this.authService.getTokenFromLocalStorage()) {
      this.auth = true;
    }
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }
}
