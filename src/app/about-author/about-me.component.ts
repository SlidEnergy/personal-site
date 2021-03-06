import { Component, OnInit, OnDestroy } from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import { getOldYears, getWorkExperienceYears } from '../shared/years-utils';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@UntilDestroy()
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit, OnDestroy {

  oldYears = getOldYears();
  workExperienceYears = getWorkExperienceYears();

  currentLang = this.translate.currentLang;

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.pipe(untilDestroyed(this))
        .subscribe((event: LangChangeEvent) => this.currentLang = event.lang);
  }

  ngOnInit() { }

  ngOnDestroy() { }
}
