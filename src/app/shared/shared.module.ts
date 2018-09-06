import { NgModule } from '@angular/core';

import { NoindexPipe } from './noindex.pipe';

@NgModule({
  declarations: [
    NoindexPipe
  ],
  exports: [
    NoindexPipe
  ],
})
export class SharedModule { }
