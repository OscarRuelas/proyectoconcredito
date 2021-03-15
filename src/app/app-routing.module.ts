import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProspectoListComponent } from './components/prospecto-list/prospecto-list.component';
import { ProspectoFormComponent } from './components/prospecto-form/prospecto-form.component';
import { ProspectoEvaluacionComponent } from './components/prospecto-evaluacion/prospecto-evaluacion.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/prospecto',
    pathMatch: 'full'
  },
  {
    path: 'prospecto',
    component: ProspectoListComponent
  },
  {
    path: 'prospecto/registro',
    component: ProspectoFormComponent
  },
  {
    path: 'prospecto/evaluacion',
    component: ProspectoEvaluacionComponent
  },
  {
    path: 'prospecto/edit/:id',
    component: ProspectoEvaluacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
