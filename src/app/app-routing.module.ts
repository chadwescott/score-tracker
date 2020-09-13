import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarcassonneComponent } from './carcassonne/components/carcassonne/carcassonne.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutes } from './shared/constants/app-routes.constants';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: '', component: HomeComponent
      },
      {
        path: AppRoutes.CARCASSONNE, component: CarcassonneComponent, children: [
          {
            path: AppRoutes.HOME, component: CarcassonneComponent
          }
        ]
      },
    ],
  },
  { path: '**', component: HomeComponent }, // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
