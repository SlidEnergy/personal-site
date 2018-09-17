import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  param = { value: 'world' };

  private supportedLangs = ['en', 'ru'];

  constructor(private translate: TranslateService) {
    this.initTranslateService();
  }

  private isLangSupported(name: string): boolean {
    return this.supportedLangs.findIndex(l => l === name) !== -1;
  }

  private initTranslateService() {
    this.translate.addLangs(this.supportedLangs);
    this.translate.setDefaultLang(this.supportedLangs[0]);
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => localStorage.setItem('lang', event.lang));

    const lang = localStorage.getItem('lang');

    if (lang && this.isLangSupported(lang)) {
      this.translate.use(lang);
    } else {
      const browserLang = this.translate.getBrowserLang();

      if (this.isLangSupported(browserLang)) {
        this.translate.use(browserLang);
      }
    }
  }
}
