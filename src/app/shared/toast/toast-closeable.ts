import { Component, TemplateRef } from '@angular/core';
import { ToastService } from '@shared/toast.service';

// @Component(
//   {
//     selector: 'app-ngbd-toast-closeable',
//     templateUrl: './toast-closeable.html'
//   }
// )

// export class NgbdToastCloseableComponent {
//   show = true;

//   close() {
//     this.show = false;
//     setTimeout(() => this.show = true, 5000);
//   }
// }

@Component({
  selector: 'app-toasts',
  templateUrl: './toast-closeable.html',
  // tslint:disable-next-line:use-host-property-decorator
})
export class ToastComponent {
  constructor(public toastService: ToastService) { }

  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }
}
