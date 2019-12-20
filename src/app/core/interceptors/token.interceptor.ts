import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentUser = JSON.parse(this.storageService.getItem('user'));
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: currentUser.token.token
        }
      });
    }

    return next.handle(request);
  }
}
