import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RubroComponent } from './pages/tarea/tarea.component';
import { NotaComponent } from './pages/nota/nota.component';
import { EditarComponent } from './pages/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    RubroComponent,
    NotaComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
