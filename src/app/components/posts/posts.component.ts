import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    FooterComponent
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

}
