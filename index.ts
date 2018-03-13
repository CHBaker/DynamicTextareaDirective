import { NgModule, ModuleWithProviders } from '@angular/core';
import { DynamicTextareaDirective } from './src/dynamic-textarea.directive';

@NgModule({
  declarations: [DynamicTextareaDirective],
  exports: [DynamicTextareaDirective]
})
export class DynamicTextareaModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: DynamicTextareaDirective };
  }
}