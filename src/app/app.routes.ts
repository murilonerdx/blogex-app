import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {HeaderComponent} from "./components/header/header.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
