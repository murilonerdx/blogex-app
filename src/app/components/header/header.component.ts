import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {DarkModeComponent} from "../dark-mode/dark-mode.component";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        RouterLink,
        DarkModeComponent
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
