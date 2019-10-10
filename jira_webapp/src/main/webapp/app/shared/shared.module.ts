import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JiraWebappSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JiraWebappSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JiraWebappSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JiraWebappSharedModule {
  static forRoot() {
    return {
      ngModule: JiraWebappSharedModule
    };
  }
}
