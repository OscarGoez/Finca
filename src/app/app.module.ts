import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NserviceComponent } from './components/nservice/nservice.component';
import { ErrorComponent } from './components/error/error.component';
import { ImgComponent } from './img/img.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,  
    ContactComponent, 
    NserviceComponent, ErrorComponent, ImgComponent,
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
