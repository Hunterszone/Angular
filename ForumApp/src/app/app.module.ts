import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CommentValidPipe } from './comment-valid.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CommentValidPipe,
  ],
  imports: [
    BrowserModule,
	  FormsModule,
    AppRoutingModule
  ],
  providers: [MainComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
