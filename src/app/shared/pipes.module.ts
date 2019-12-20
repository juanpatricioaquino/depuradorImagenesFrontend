import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
  declarations: [],
  exports: []
})
export class PipesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PipesModule,
      providers: [
        // services that you want to share across modules
      ]
    };
  }
}
