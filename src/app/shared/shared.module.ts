import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from './toast/toast-closeable';
import { ToastService } from './toast.service';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule, NgbToastModule],
  exports: [ToastComponent],
  providers: [ToastService]
})
export class SharedModule { }
