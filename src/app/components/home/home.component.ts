import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { catchError, tap } from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Projeto} from "../../types/Projeto";
import {CommonModule} from "@angular/common";
import {Certificacao} from "../../types/Certificacao";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {SkillsComponent} from "../skills/skills.component";
import {WorkExperienceComponent} from "../work-experience/work-experience.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [CommonModule, HttpClientModule, PdfViewerModule, FormsModule, SkillsComponent, WorkExperienceComponent], // Importe HttpClientModule aqui
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  starsGroup1Styles: string = '';
  starsGroup2Styles: string = '';
  starsGroup3Styles: string = '';

  randomStars(n: number): string {
    let value = `${Math.floor(Math.random() * 5000 + 2)}px ${Math.floor(
      Math.random() * 6000 + 2
    )}px #00d0ff`;
    for (let i = 0; i < n; i = i + 2) {
      value += `, ${Math.floor(Math.random() * 5000 + 2)}px ${Math.floor(
        Math.random() * 6000 + 2
      )}px #00d0ff`;
    }
    return value;
  }

  // A propriedade que controla a visibilidade do modal
  isModalOpen = false;

  // Método para alternar a visibilidade do modal
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
  public atualizarInformacoes: boolean = false
  public termoBusca: string = ''; // Adicione esta linha
  public certificacoesFiltradas: Certificacao[] = [];
  public projetos: Projeto[] = [];
  public projetosBlogex: Projeto[] = [];
  public certificacoes: Certificacao[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.starsGroup1Styles = this.randomStars(20000);
    this.starsGroup2Styles = this.randomStars(2000);
    this.starsGroup3Styles = this.randomStars(900);

    const ctf = JSON.parse(localStorage.getItem('certificacoes') || '[]');
    const prj = JSON.parse(localStorage.getItem('projetos') || '[]');

    if(ctf.length > 0 && !this.atualizarInformacoes){
      this.certificacoes = ctf
      this.certificacoesFiltradas = this.certificacoes.slice(0, 3);
    } else {
      this.listarArquivosCertificacoes();
    }

    if(prj.length > 0 && !this.atualizarInformacoes){
      this.projetos = prj;
    } else {
      this.buscarProjetosGitHub();
    }
  }

  atualizarFiltragem(): void {
    if (this.termoBusca) {
      this.certificacoesFiltradas = this.certificacoes.filter(certificacao =>
        certificacao.nome.toLowerCase().includes(this.termoBusca.toLowerCase()));
    } else {
      // Resetar para a lista completa se o termo de busca estiver vazio
      let totallist = this.certificacoes.slice(0, 3)
      this.certificacoesFiltradas = [... totallist];
    }
  }
  listarArquivosCertificacoes() {
    const url = `https://api.github.com/repos/murilonerdx/my-goals/contents/certificacoes`;

    this.http.get<any[]>(url).pipe(
      tap(data => {
        this.certificacoes = data.filter(item => item.type == "file").map(item => ({
          nome: item.name.replace(".pdf", ""),
          tamanho: item.size,
          download_url: item.download_url,
        }));
        localStorage.setItem('certificacoes', JSON.stringify(this.certificacoes));
        this.certificacoesFiltradas = [...this.certificacoes.slice(0, 10)];
      }),
      catchError(error => {
        console.error(error);
        return of([]);
      })
    ).subscribe();
  }
  buscarProjetosGitHub() {
    this.http.get<any[]>('https://api.github.com/users/murilonerdx/repos?page=1&per_page=100').pipe(
      tap(data => {
        this.projetosBlogex = data.map(item => ({
          nome: item.full_name,
          descricao: item.description,
          tags: item.topics,
          tamanho: item.size,
          linguagem: item.language,
          html_url: item.html_url
        }));

        this.projetos = this.projetosBlogex.filter(item =>
          item.tags.some(tag => tag.toLowerCase().includes("blogex".toLowerCase()))
        );
        // Atualizar localStorage aqui
        localStorage.setItem('projetos', JSON.stringify(this.projetos));
      }),
      catchError(error => {
        console.error(error);
        return of([]);
      })
    ).subscribe();
  }
}
