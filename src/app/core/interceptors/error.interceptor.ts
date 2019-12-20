import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MessageService } from '../services/message.service';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private messageService: MessageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        let messageText = '';
        console.log('Error en el interceptor:', err);

        switch (err.status) {
          case 0: // Backend bajo
            this.router.navigate(['/offline']);
            break;
          case 400: // Bad Request
            break;
          case 401: // Unauthorized
            messageText = 'Su sessi\xF3n ha caducado o no tiene permisos para acceder a la secci\xF3n solicitada.';
            location.reload(true);
            break;
          case 403: // Forbiden
            messageText = 'No tiene permisos para acceder a la secci\xF3n solicitada.';
            break;
          case 404: // Not Found
            if (!request.url.startsWith(environment.url_backend)) {
              this.router.navigate(['/404']);
            }
            break;
          case 409: // Conflict - Utilizado para los errores por lockeo.
            messageText =
              'El registro fue modificado y no es posible guardar sus cambios.  <br/><br/>' +
              'Deber\xe1 refrescar la pantalla y volver a ingresar la informaci\xF3n.';
            break;
          case 498: // Sin asignar
            messageText += err.message;
            break;
          case 503: // Service Unavailable
            this.router.navigate(['/offline']);
            break;
          default:
            if (err.error !== null) {
              messageText += err.error.message ? err.error.message : err.statusText;
            } else {
              messageText += err.status + err.statusText;
            }
            break;
        }

        if (messageText !== null) {
          this.messageService.messageError('Se ha producido un error', messageText);
        }

        return throwError(err);
      })
    );
  }
}
