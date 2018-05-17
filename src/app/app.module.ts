import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { StudentRegistrationComponentComponent} from './Components/student-registration-component/student-registration-component.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponentComponent } from './Components/header-component/header-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    StudentRegistrationComponentComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
