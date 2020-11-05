import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { NgxGalleryModule } from 'ngx-gallery-9';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AboutAuthorModule } from './about-author/about-author.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header.component';
import { FooterComponent } from './core/footer.component';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { ProjectsPageComponent } from './projects/projects-page.component';
import { ProjectComponent } from './projects/project.component';
import { ProjectFilterPipe } from './projects/project-filter.pipe';
import { FiltersComponent } from './projects/filters.component';
import { TagComponent } from './projects/tag.component';
import { SharedModule } from './shared/shared.module';

const appRoutes: Routes = [
  { path: '', component: AboutAuthorComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: '**', redirectTo: '/' }
];

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AboutAuthorModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
