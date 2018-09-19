import { Component, OnDestroy } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Title, Meta } from '@angular/platform-browser';
import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  param = { value: 'world' };

  private supportedLangs = ['en', 'ru'];

  constructor(
    private translate: TranslateService,
    private title: Title,
    private meta: Meta
  ) {
    this.initTranslateService();
    this.initTitleAndMeta();
  }

  initTitleAndMeta() {
    this.translate.stream('core.pageTitle').pipe(untilComponentDestroyed(this)).subscribe(title => {
      this.title.setTitle(title);
      this.meta.updateTag({ name: 'description', content: title });
    });
  }

  isLangSupported(name: string): boolean {
    return this.supportedLangs.findIndex(l => l === name) !== -1;
  }

  initTranslateService() {
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

  ngOnDestroy() { }
}
