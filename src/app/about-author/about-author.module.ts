import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

import {AboutAuthorComponent} from './about-author.component';
import {AboutMeFormalComponent} from './about-me-formal/about-me-formal.component';
import {ContactsComponent} from './about-me-formal/contacts.component';
import {EducationComponent} from './about-me-formal/education.component';
import {PresonalQualComponent} from './about-me-formal/presonal-qual.component';
import {ProfSkillsComponent} from './about-me-formal/prof-skills.component';
import {WorkExpComponent} from './about-me-formal/work-exp.component';
import {AboutMeComponent} from './about-me.component';
import {FeedbackComponent} from './feedback.component';

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
        FeedbackComponent,
        EducationComponent
    ]
})
export class AboutAuthorModule {
}
