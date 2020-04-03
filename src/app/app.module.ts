import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateAppComponent } from './date-app/date-app.component';
import { DateAutoRefershComponent } from './date-auto-refersh/date-auto-refersh.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateAppComponent,
    DateAutoRefershComponent,
    UserAccountComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
