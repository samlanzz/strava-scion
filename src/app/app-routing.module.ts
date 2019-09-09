import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonComponent } from './person/person.component';


const routes: Routes = [
  {path: 'persons', component: PersonListComponent},
  {path: 'persons/:id', component: PersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
