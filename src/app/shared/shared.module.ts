import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { NoindexPipe } from './noindex.pipe';

@NgModule({
  declarations: [
    NoindexPipe
  ],
  imports: [
    TranslateModule
  ],
  exports: [
    NoindexPipe,
    TranslateModule
  ],
})
export class SharedModule { }
