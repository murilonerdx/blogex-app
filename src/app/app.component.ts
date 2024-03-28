import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, HeaderComponent, HomeComponent], // Confirme se são standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrigido para 'styleUrls'
})
export class AppComponent {
  title = 'blogex-app';

}
