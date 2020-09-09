import {Component, OnDestroy, OnInit} from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';

@UntilDestroy()
@Component({
    selector: 'app-prof-skills',
    templateUrl: './prof-skills.component.html',
    styleUrls: ['./prof-skills.component.scss']
})
export class ProfSkillsComponent implements OnInit, OnDestroy {
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
