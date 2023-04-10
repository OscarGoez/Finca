import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NserviceComponent } from './components/nservice/nservice.component';
import { ErrorComponent } from './components/error/error.component';


const appRoutes: Routes =[
    {path: '', component: IndexComponent},
    {path: 'inicio', component: IndexComponent},
    {path: 'contacto', component: ContactComponent},
    {path: 'quienes-somos', component: AboutComponent},
    {path: 'servicios', component: NserviceComponent},
    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders <any> = RouterModule.forRoot(appRoutes);