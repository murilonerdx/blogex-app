import {Component, OnInit} from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {catchError, tap} from "rxjs/operators";
import {of} from "rxjs";
import {CommonModule} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {FormsModule} from "@angular/forms";
import {SkillsComponent} from "../skills/skills.component";
import {Certificacao} from "../../model/Certificacao";
import {Post} from "../../model/Post";
import {Publicacao} from "../../model/Publicacao";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FooterComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent  {

}
