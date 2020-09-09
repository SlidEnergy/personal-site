import {Component, OnDestroy, OnInit} from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {getEducationYears} from '../../shared/years-utils';

@UntilDestroy()
@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit, OnDestroy {
    educationYears = getEducationYears();

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
