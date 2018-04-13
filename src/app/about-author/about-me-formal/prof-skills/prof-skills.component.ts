import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prof-skills',
  templateUrl: './prof-skills.component.html',
  styleUrls: ['./prof-skills.component.scss']
})
export class ProfSkillsComponent implements OnInit {

  progLang = {
    name: 'Языки программирования/разметки и скриптовые языки',
    beginner: 'PowerShell',
    intermediate: 'JavaScript, TypeScript, T-SQL, HTML, CSS',
    expert: 'C#'
  };

  technology = {
    name: 'Технологии',
    beginner: 'NodeJS, Entity Framework',
    intermediate: 'NUnit testing, sockets',
    expert: 'WinForms, ado.net, ASP.NET, WebApi, async programming'
  };

  visualComponents = {
    name: 'Визуальные компоненты',
    beginner: '',
    intermediate: '',
    expert: 'DevExpress WinForms/ASP.NET/JS&HTML'
  };

  frameworks = {
    name: 'Фреймворки',
    beginner: 'Bootstrap, AngularJS',
    intermediate: 'Angular 2+',
    expert: '.NET 4.5'
  };

  items = [
    this.progLang,
    this.technology,
    this.visualComponents,
    this.frameworks,
  ];

  constructor() { }

  ngOnInit() {
  }

}
