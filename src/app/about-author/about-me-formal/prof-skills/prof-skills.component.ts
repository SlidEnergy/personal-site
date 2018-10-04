import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';

@Component({
  selector: 'app-prof-skills',
  templateUrl: './prof-skills.component.html',
  styleUrls: ['./prof-skills.component.scss']
})
export class ProfSkillsComponent implements OnInit, OnDestroy {

  progLang = {
    nameRu: 'Языки и разметка',
    nameEn: 'Languages and markup',
    beginner: 'PowerShell',
    intermediate: 'JavaScript, TypeScript, T-SQL, HTML, CSS',
    expert: 'C#'
  };

  technology = {
    nameRu: 'Технологии',
    nameEn: 'Technologies',
    beginner: 'NodeJS, Entity Framework',
    intermediate: 'NUnit testing, sockets',
    expert: 'WinForms, ado.net, ASP.NET, WebApi, async programming'
  };

  visualComponents = {
    nameRu: 'Визуальные компоненты',
    nameEn: 'Visual components',
    beginner: '',
    intermediate: '',
    expert: 'DevExpress WinForms/ASP.NET/JS&HTML'
  };

  frameworks = {
    nameRu: 'Фреймворки',
    nameEn: 'Frameworks',
    beginner: 'Bootstrap, AngularJS',
    intermediate: 'Angular 2+',
    expert: '.NET 4.6'
  };

  items = [
    this.progLang,
    this.technology,
    this.visualComponents,
    this.frameworks,
  ];

  currentLang = this.translate.currentLang;

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.pipe(untilComponentDestroyed(this)).subscribe((event: LangChangeEvent) => this.currentLang = event.lang);
  }

  ngOnInit() { }

  ngOnDestroy() { }
}
