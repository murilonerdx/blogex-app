import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Router, RouterLink} from "@angular/router";
import {environment} from "../../../environment/environment.prod";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    HttpClientModule,
    NgIf,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(private http: HttpClient, private router: Router) {}
  private apiURL = environment.msAuth; // URL do seu backend

  login(loginData: any): Observable<string> {
    return this.http.post<string>(`${this.apiURL}/auth`, loginData, { responseType: 'text' as 'json' });
  }
  onLogin(): void {
    const loginData = {
      email: this.email,
      password: this.password
    };

    this.login(loginData).subscribe({
      next: (response) => {
        localStorage.setItem('token', 'Bearer ' + response.trim()); // Store token in localStorage
          this.router.navigate(['/posts']).then(r => r); // Redirect to home page after login
      },
      error: (err) => {
        this.errorMessage = 'Credenciais inválidas. Tente novamente.'; // Handle error message
      }
    });
  }

}
