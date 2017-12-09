import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prof-skills',
  templateUrl: './prof-skills.component.html',
  styleUrls: ['./prof-skills.component.scss']
})
export class ProfSkillsComponent implements OnInit {

  progLang = {
    name: 'Языки программирования и скриптовые языки',
    beginner: 'PowerShell',
    intermediate: 'JavaScript, TypeScript, T-SQL',
    expert: 'C#'
  };

  technology = {
    name: 'Технологии',
    beginner: 'NodeJS, NUnit testing, Entity Framework',
    intermediate: 'WebApi, sockets, async programming',
    expert: 'WinForms, ado.net, ASP.NET'
  };

  visualComponents = {
    name: 'Визуальные компоненты',
    beginner: '',
    intermediate: '',
    expert: 'DevExpress WinForms/ASP.NET/JS&HTML'
  };

  markupLang = {
    name: 'Языки разметки',
    beginner: '',
    intermediate: 'XML',
    expert: 'HTML, CSS'
  };

  frameworks = {
    name: 'Фреймворки',
    beginner: 'Bootstrap',
    intermediate: 'AngularJS, Angular 2+',
    expert: '.NET 4.0'
  };

  sysVersCtrl = {
    name: 'Системы контроля версий',
    beginner: '',
    intermediate: 'GIT',
    expert: 'Subversion'
  };

  items = [
    this.progLang,
    this.technology,
    this.visualComponents,
    this.markupLang,
    this.frameworks,
    this.sysVersCtrl
  ];

  constructor() { }

  ngOnInit() {
  }

}
