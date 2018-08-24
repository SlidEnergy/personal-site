import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { NgxGalleryModule } from 'ngx-gallery';

import { AboutAuthorModule } from './about-author/about-author.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { ProjectsPageComponent } from './projects/projects-page.component';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectFilterPipe } from './projects/project-filter.pipe';
import { FiltersComponent } from './projects/filters/filters.component';
import { TagComponent } from './shared/tag/tag.component';

const appRoutes: Routes = [
  { path: '', component: AboutAuthorComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsPageComponent,
    ProjectComponent,
    ProjectFilterPipe,
    FiltersComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    NgxGalleryModule,
    AngularFontAwesomeModule,
    AboutAuthorModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
