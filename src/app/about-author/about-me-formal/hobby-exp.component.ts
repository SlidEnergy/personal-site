import {Component, OnDestroy, OnInit} from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';

@UntilDestroy()
@Component({
    selector: 'app-hobby-exp',
    templateUrl: './hobby-exp.component.html',
    styleUrls: ['./hobby-exp.component.scss']
})
export class HobbyExpComponent implements OnInit, OnDestroy {
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
