import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import {Routes, RouterModule} from '@angular/router';

import { AboutAuthorModule } from './about-author/about-author.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutAuthorComponent } from './about-author/about-author.component';

const appRoutes: Routes =[
  { path: '', component: AboutAuthorComponent},
  // { path: 'projects', component: ProjectsComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AboutAuthorModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
