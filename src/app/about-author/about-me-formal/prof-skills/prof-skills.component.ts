import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';

@Component({
  selector: 'app-prof-skills',
  templateUrl: './prof-skills.component.html',
  styleUrls: ['./prof-skills.component.scss']
})
export class ProfSkillsComponent implements OnInit, OnDestroy {
  currentLang = this.translate.currentLang;

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.pipe(untilComponentDestroyed(this)).subscribe((event: LangChangeEvent) => this.currentLang = event.lang);
  }

  ngOnInit() { }

  ngOnDestroy() { }
}
