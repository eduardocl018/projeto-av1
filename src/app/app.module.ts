import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';  // Adicione FormsModule aqui

@NgModule({
  declarations: [AppComponent],  // Adicione o seu componente aqui
  imports: [BrowserModule, AppRoutingModule, FormsModule],  // FormsModule aqui
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}