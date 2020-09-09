import {Component, OnDestroy, OnInit} from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {getWorkExperienceYears} from '../../shared/years-utils';

@UntilDestroy()
@Component({
    selector: 'app-work-exp',
    templateUrl: './work-exp.component.html',
    styleUrls: ['./work-exp.component.scss']
})
export class WorkExpComponent implements OnInit, OnDestroy {

    workExperienceYears = getWorkExperienceYears();

    currentLang = this.translate.currentLang;

    constructor(private translate: TranslateService) {
        this.translate.onLangChange.pipe(untilDestroyed(this))
            .subscribe((event: LangChangeEvent) => this.currentLang = event.lang);
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
