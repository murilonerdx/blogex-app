import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {HomeComponent} from "./components/home/home.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {BrowserModule} from "@angular/platform-browser";
import {PostsComponent} from "./components/posts/posts.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PdfViewerModule],
  exports: [RouterModule],
  declarations: [
  ],
  providers: [HttpClient],

})
export class AppRoutingModule { }
