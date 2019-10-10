import { NgModule } from '@angular/core';

import { JiraWebappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JiraWebappSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JiraWebappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JiraWebappSharedCommonModule {}
