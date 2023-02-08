import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { MatBadgeModule} from '@angular/material/badge';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoComponent } from './components/todo/todo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignupComponent } from './components/signup/signup.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatToolbarModule,
    MatTooltipModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TodoListComponent,
    TodoComponent,
    TodoFormComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
