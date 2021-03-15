import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProspectoFormComponent } from './components/prospecto-form/prospecto-form.component';
import { ProspectoListComponent } from './components/prospecto-list/prospecto-list.component';

import { ProspectoService } from './services/prospecto.service';
import { ProspectoEvaluacionComponent } from './components/prospecto-evaluacion/prospecto-evaluacion.component';
import { InformacionmodalComponent } from './components/informacionmodal/informacionmodal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProspectoFormComponent,
    ProspectoListComponent,
    ProspectoEvaluacionComponent,
    InformacionmodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProspectoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
