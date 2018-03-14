import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTextareaDirective } from './dynamic-textarea.directive';

export * from './dynamic-textarea.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DynamicTextareaDirective],
  exports: [DynamicTextareaDirective]
})
export class DynamicTextareaModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: DynamicTextareaModule };
  }
}
