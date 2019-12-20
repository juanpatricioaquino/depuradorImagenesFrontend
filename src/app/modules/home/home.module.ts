import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from '@shared/pipes.module';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbToastModule,
    SharedModule,
    PipesModule.forRoot(),
    MatProgressSpinnerModule
  ],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule { }
