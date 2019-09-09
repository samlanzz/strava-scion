import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Subject } from 'rxjs';
import { WorkbenchView } from '@scion/workbench';
import { distinctUntilChanged, map, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  private destroy$ = new Subject<void>();

  constructor(route: ActivatedRoute,
              view: WorkbenchView) {
    route.paramMap
      .pipe(
        map(paramMap => paramMap.get('id')),
        distinctUntilChanged(),
        switchMap(() => of({firstname: 'Steve', lastname: 'Jobs'})),
        takeUntil(this.destroy$)
      )
      .subscribe(person => {
        view.title = `${person.firstname} ${person.lastname}`;
        view.heading = 'Person 1';
      });
  }

  ngOnInit() {
  }

}
