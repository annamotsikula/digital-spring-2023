import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { StudentResumeComponent } from './student-resume/student-resume.component';
import { PostsComponent } from './posts/posts.component';
import { TruncateStringPipe } from './helpers/pipes/truncate.pipe';

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
    StudentResumeComponent,
    PostsComponent,
    TruncateStringPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
