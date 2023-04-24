import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { DirectivesComponent } from './directives/directives.component';
import { ElementHighlighter } from './directives/highlighter.directive';
import { PipesComponent } from './pipes/pipes.component';
import { StudentConfigComponent } from './student-config/student-config.component';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentProfileComponent } from './student-profile/student-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    StudentCardComponent,
    DirectivesComponent,
    ElementHighlighter,
    PipesComponent,
    StudentConfigComponent,
    TodoComponent,
    TodoItemComponent,
    StudentProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
