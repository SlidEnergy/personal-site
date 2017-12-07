import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutAuthorComponent } from './about-author.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutMeFormalComponent } from './about-me-formal/about-me-formal.component';
import { ContactsComponent } from './about-me-formal/contacts/contacts.component';
import { ProfSkillsComponent } from './about-me-formal/prof-skills/prof-skills.component';
import { PresonalQualComponent } from './about-me-formal/presonal-qual/presonal-qual.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AboutAuthorComponent,
    AboutMeComponent,
    AboutMeFormalComponent,
    ContactsComponent,
    ProfSkillsComponent,
    PresonalQualComponent
  ]
})
export class AboutAuthorModule { }
