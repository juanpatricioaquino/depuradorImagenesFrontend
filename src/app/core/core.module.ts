import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, CoreRoutingModule, SharedModule],
  declarations: []
})
export class CoreModule { }
