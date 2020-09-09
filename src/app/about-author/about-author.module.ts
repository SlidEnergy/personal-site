import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutAuthorComponent } from './about-author.component';
import { AboutMeComponent } from './about-me.component';
import { AboutMeFormalComponent } from './about-me-formal/about-me-formal.component';
import { ContactsComponent } from './about-me-formal/contacts.component';
import { ProfSkillsComponent } from './about-me-formal/prof-skills.component';
import { PresonalQualComponent } from './about-me-formal/presonal-qual.component';
import { WorkExpComponent } from './about-me-formal/work-exp.component';
import { FeedbackComponent } from './feedback.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    AboutAuthorComponent,
    AboutMeComponent,
    AboutMeFormalComponent,
    ContactsComponent,
    ProfSkillsComponent,
    PresonalQualComponent,
    WorkExpComponent,
    FeedbackComponent
  ]
})
export class AboutAuthorModule { }
