import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoaderService } from '@core/loader/loader.service';
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(public loaderService: LoaderService) { }

  // crear un arrary de excepciones para los métodos que no queremos que aparezca el spinner
  urlExcepciones: string[] = ["api/parametro/afiliado"];

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let incluye = false;
    this.urlExcepciones.forEach(url => {
      if (req.url.includes(url)) {
        incluye = true;
      }
    });
    if (!incluye) {
      this.loaderService.show();
      return next.handle(req).pipe(finalize(() => this.loaderService.hide()));
    }
    return next.handle(req).pipe();
  }
}
