import {Component, OnDestroy, OnInit} from '@angular/core';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {untilComponentDestroyed} from '@w11k/ngx-componentdestroyed';
import {getWorkExperienceYears} from '../../shared/years-utils';

@Component({
    selector: 'app-work-exp',
    templateUrl: './work-exp.component.html',
    styleUrls: ['./work-exp.component.scss']
})
export class WorkExpComponent implements OnInit, OnDestroy {

    workExperienceYears = getWorkExperienceYears();

    currentLang = this.translate.currentLang;

    constructor(private translate: TranslateService) {
        this.translate.onLangChange.pipe(untilComponentDestroyed(this)).subscribe((event: LangChangeEvent) => this.currentLang = event.lang);
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
