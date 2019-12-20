import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppTemplateComponent } from '@core/template/app/app.component';
import { TipoMenu } from '@core/template/app/tipo-menu.enum';

const routes: Routes = [
  {
    path: '',
    component: AppTemplateComponent,
    data: {
      tipoMenu: TipoMenu.sidebar
    },
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: './modules/home/home.module#HomeModule',
      },
    ]
  },
  {
    path: '',
    loadChildren: './core/core.module#CoreModule'
  },
  // {
  //   path: '**',
  //   redirectTo: '/notFound'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

