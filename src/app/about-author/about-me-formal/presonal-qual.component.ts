import { Component, OnInit, OnDestroy } from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@UntilDestroy()
@Component({
  selector: 'app-presonal-qual',
  templateUrl: './presonal-qual.component.html',
  styleUrls: ['./presonal-qual.component.scss']
})
export class PresonalQualComponent implements OnInit, OnDestroy {

  currentLang = this.translate.currentLang;

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.pipe(untilDestroyed(this))
        .subscribe((event: LangChangeEvent) => this.currentLang = event.lang);
  }

  ngOnInit() { }

  ngOnDestroy() { }
}
