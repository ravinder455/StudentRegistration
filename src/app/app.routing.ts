import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentRegistrationComponentComponent} from './Components/student-registration-component/student-registration-component.component';

const appRoutes: Routes = [

  {
    path: 'registration',
    component: StudentRegistrationComponentComponent
  },
  {
    path: '**',
    redirectTo: 'registration',
    pathMatch: 'full'
  }
];

@NgModule ({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
