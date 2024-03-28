import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { catchError, tap } from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Projeto} from "../../model/Projeto";
import {CommonModule} from "@angular/common";
import {Certificacao} from "../../model/Certificacao";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, PdfViewerModule], // Importe HttpClientModule aqui
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public projetos: Projeto[] = [];
  certificacoes: Certificacao[] = [];
  safeUrl = "../../../assets/cv/CV - Atualizado.pdf";
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.listarArquivosCertificacoes();
    this.buscarProjetosGitHub();
  }

  listarArquivosCertificacoes(){
    const url = `https://api.github.com/repos/murilonerdx/my-goals/contents/certificacoes`;

    this.http.get<any[]>(url).pipe(
      tap(data => {
        console.log(data)
        this.certificacoes = data.filter(item => item.type == "file").map(item =>({
          nome: item.name.replace(".pdf", ""),
          tamanho: item.size,
          download_url: item.download_url,
        }))
      }),
      catchError(error => {
        console.error(error);
        return of([]); // Retorna um Observable vazio ou com valor padrão em caso de erro
      })
    ).subscribe();
  }
  buscarProjetosGitHub() {
    this.http.get<any[]>('https://api.github.com/users/murilonerdx/repos').pipe(
      tap(data => {


        this.projetos = data.map(item => ({
          nome: item.full_name,
          descricao: item.description,
          tags: item.topics, // Assumindo que 'topics' está sendo usado como 'tags'
          tamanho: item.size,
          linguagem: item.language,
          html_url: item.html_url // Utiliza a imagem do proprietário como exemplo
        })).slice(20);

      }),
      catchError(error => {
        console.error(error);
        return of([]); // Retorna um Observable vazio ou com valor padrão em caso de erro
      })
    ).subscribe(); // A chamada .subscribe() é mantida, mas sem lógica adicional
  }
}
