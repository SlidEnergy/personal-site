import {Component, OnDestroy, OnInit} from '@angular/core';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {untilComponentDestroyed} from '@w11k/ngx-componentdestroyed';

@Component({
    selector: 'app-hobby-exp',
    templateUrl: './hobby-exp.component.html',
    styleUrls: ['./hobby-exp.component.scss']
})
export class HobbyExpComponent implements OnInit, OnDestroy {
    currentLang = this.translate.currentLang;

    constructor(private translate: TranslateService) {
        this.translate.onLangChange.pipe(untilComponentDestroyed(this))
            .subscribe((event: LangChangeEvent) => this.currentLang = event.lang);
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
