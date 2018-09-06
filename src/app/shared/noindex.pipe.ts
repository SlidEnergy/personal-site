import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noindex'
})
export class NoindexPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (navigator.userAgent.search(/bot|crawler|spider|robot|crawling|googlebot|yandex|baidu|bing|msn|duckduckbot|teoma|slurp/i) >= 0) {
      return '<Данный текст скрыт от поисковых систем>';

      if (args === 'html') {
        value = value.replace(/<noindex>[\s\S]*?<\/noindex>/, '');
      }
    }

    return value;
  }
}
