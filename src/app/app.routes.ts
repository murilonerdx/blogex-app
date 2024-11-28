import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {HomeComponent} from "./components/home/home.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {BrowserModule} from "@angular/platform-browser";
import {QuillModule} from "ngx-quill";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "../auth.guard";
import {PostsComponent} from "./components/posts/posts.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
  // { path: 'create-post', component: CreatePostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PdfViewerModule, QuillModule.forRoot(),BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule],
  exports: [RouterModule],
  declarations: [
  ],
  providers: [HttpClient],

})
export class AppRoutingModule { }
