import { Component } from '@angular/core';
import {QuillEditorComponent} from "ngx-quill";

@Component({
  selector: 'app-create-post',
  standalone: true,
  templateUrl: './create-post.component.html',
  imports: [
    QuillEditorComponent
  ],

  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
}
