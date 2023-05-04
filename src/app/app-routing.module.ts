import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TodoComponent } from './todo/todo.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentResumeComponent } from './student-resume/student-resume.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: '',
        component: PostsComponent
      },
      {
        path: 'resume-builder',
        component: StudentResumeComponent
      },
      {
        path: 'todo',
        component: TodoComponent
      },
      {
        path: 'directives',
        component: DirectivesComponent
      },
      {
        path: 'pipes',
        component: PipesComponent
      }
    ]
  },
  {
    path: 'student-profile',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
