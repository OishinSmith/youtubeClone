import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isAuthenticated = false;

  login(username: string, password: string): boolean {
    // Implement your authentication logic here (e.g., check username and password).
    if (username === 'user' && password === 'password') {
      this.isAuthenticated = true;
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
