import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { StudentCardComponent } from './student/student-card/student-card.component';
import { DirectivesComponent } from './directives/directives.component';
import { ElementHighlighter } from './directives/highlighter.directive';
import { PipesComponent } from './pipes/pipes.component';
import { StudentConfigComponent } from './student/student-config/student-config.component';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    DirectivesComponent,
    ElementHighlighter,
    PipesComponent,
    TodoComponent,
    TodoItemComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
