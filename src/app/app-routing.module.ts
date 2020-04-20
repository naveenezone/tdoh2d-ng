import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-list/todo-detail/todo-detail.component';
import { TodoEditComponent } from './todo-list/todo-edit/todo-edit.component';
import { RouteGuardAuthService } from './shared/service/auth/route-guard-auth.service';


// const routes: Routes = [];
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'welcome/:name', component: WelcomeComponent },
  // 
  { path: 'todos', component: TodoListComponent , canActivate: [RouteGuardAuthService] },
  { path: 'todo', component: TodoDetailComponent , canActivate: [RouteGuardAuthService] },
  { path: 'todos/:id', component: TodoDetailComponent , canActivate: [RouteGuardAuthService] },
  { path: 'todo-edit', component: TodoEditComponent , canActivate: [RouteGuardAuthService] },
  { path: 'todos/:id/edit', component: TodoEditComponent , canActivate: [RouteGuardAuthService] },
  { path: 'todos/view/:id', component: TodoDetailComponent , canActivate: [RouteGuardAuthService] },
  // 
  { path: '**', component: ErrorComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
