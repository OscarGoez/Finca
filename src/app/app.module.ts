import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NserviceComponent } from './components/nservice/nservice.component';
import { ErrorComponent } from './components/error/error.component';
import { ImgComponent } from './img/img.component';
import { UserComponent } from './user/user.component';
import { EmailService } from './services/email.service';
import { UserService } from './services/user.services';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,  
    ContactComponent, 
    NserviceComponent, 
    ErrorComponent, 
    ImgComponent, UserComponent,   
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [appRoutingProviders,EmailService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
