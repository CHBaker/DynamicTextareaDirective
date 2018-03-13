import { NgModule, ModuleWithProviders } from '@angular/core';
import { DynamicTextareaDirective } from './dynamic-textarea.directive';

@NgModule({
  declarations: [DynamicTextareaDirective],
  exports: [DynamicTextareaDirective]
})
export class DynamicTextareaModule {}
