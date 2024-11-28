import { CanActivateFn } from '@angular/router';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');  // Exemplo: verifica se há um token no localStorage
  }

  // Método para logout
  logout() {
    localStorage.removeItem('token');
  }

  canActivate(): boolean {
    if (this.isLoggedIn()) {
      return true;  // Se o usuário estiver logado, permite a navegação
    } else {
      this.router.navigate(['/login']).then(r => r);  // Redireciona para a página de login se não estiver logado
      return false;
    }
  }
}
