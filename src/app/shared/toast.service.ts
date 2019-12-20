import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
    toasts: any[] = [];

    success(text: string, options: any = {}) {
        const toast = {
            text: text,
            type: 'success',
            class: 'bg-success text-light float-right',
            header: 'Éxito'
        }
        this.toasts.push(toast);
    }
    error(text: string, options: any = {}) {
        const toast = {
            text: text,
            type: 'error',
            class: 'bg-danger text-light float-right',
            header: 'Error'
        }
        this.toasts.push(toast);
    }
    warning(text: string, options: any = {}) {
        const toast = {
            text: text,
            type: 'warning',
            class: 'toast-warning',
            header: 'Atención'
        }
        this.toasts.push(toast);
    }
    info(text: string, options: any = {}) {
        const toast = {
            text: text,
            type: 'info',
            class: 'toast-info',
            header: 'Información'
        }
        this.toasts.push(toast);
    }

    remove(toast) {
        this.toasts = this.toasts.filter(t => t !== toast);
    }
}
