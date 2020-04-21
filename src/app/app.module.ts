import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-list/todo-detail/todo-detail.component';
import { TodoEditComponent } from './todo-list/todo-edit/todo-edit.component';
import { MyBoolPipe } from './shared/pipe/myBool.pipe';
import { HttpInterceptorBasicAuthService } from './shared/service/http/http-interceptor-basic-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    ErrorComponent,
    TodoListComponent,
    TodoDetailComponent,
    TodoEditComponent,
    MyBoolPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorBasicAuthService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
