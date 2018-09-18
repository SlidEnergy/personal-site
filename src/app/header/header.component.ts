import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentLang = this.translate.currentLang;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  language_click(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
  }
}
