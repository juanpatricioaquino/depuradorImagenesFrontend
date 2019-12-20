import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import localeAR from '@angular/common/locales/es-AR';
import { LOCALE_ID, NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from "@angular/material";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingInterceptor } from '@core/interceptors/loading.interceptor';
import { LoaderComponent } from '@core/loader/loader.component';
import { LoaderService } from '@core/loader/loader.service';
import { AppTemplateComponent } from '@core/template/app/app.component';
import { NgbCollapseModule, NgbDropdownModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from '@shared/pipes.module';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

registerLocaleData(localeAR);


@NgModule({
  declarations: [AppComponent, AppTemplateComponent, LoaderComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbToastModule,
    SharedModule,
    PipesModule.forRoot(),
    NgbDropdownModule,
    NgbCollapseModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [
    LoaderService,
    { provide: LOCALE_ID, useValue: 'es-AR' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
