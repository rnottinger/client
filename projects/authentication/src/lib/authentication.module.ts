import {ModuleWithProviders, NgModule} from '@angular/core';
import { AuthenticationComponent } from './authentication.component';
import {LibraryConfig} from "./models/config";



@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
  ],
  exports: [
    AuthenticationComponent
  ]
})
export class AuthenticationModule {

  static forRoot(config: LibraryConfig): ModuleWithProviders<AuthenticationModule> {
    return { ngModule: AuthenticationModule,
      providers: [{provide: 'config', useValue: config}] };
  }

}
