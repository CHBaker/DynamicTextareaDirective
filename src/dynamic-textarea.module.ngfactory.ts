/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './dynamic-textarea.module';
import * as import2 from '@angular/core/src/di/injector';
class DynamicTextareaModuleInjector extends import0.NgModuleInjector<import1.DynamicTextareaModule> {
  _DynamicTextareaModule_0:import1.DynamicTextareaModule;
  constructor(parent:import2.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  createInternal():import1.DynamicTextareaModule {
    this._DynamicTextareaModule_0 = new import1.DynamicTextareaModule();
    return this._DynamicTextareaModule_0;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import1.DynamicTextareaModule)) { return this._DynamicTextareaModule_0; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const DynamicTextareaModuleNgFactory:import0.NgModuleFactory<import1.DynamicTextareaModule> = new import0.NgModuleFactory(DynamicTextareaModuleInjector,import1.DynamicTextareaModule);