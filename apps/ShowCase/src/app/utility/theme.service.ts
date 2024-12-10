import { Injectable, signal, effect } from '@angular/core';

type ThemeType = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _currentTheme = signal<ThemeType>(this.getInitialTheme());
  readonly currentTheme = this._currentTheme.asReadonly();

  constructor() {
    effect(() => {
      document.body.classList.remove('light-theme', 'dark-theme');
      document.body.classList.add(`${this._currentTheme()}-theme`);
      localStorage.setItem('app-theme', this._currentTheme());
    });

    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    prefersDarkScheme.addEventListener('change', (e) => {
      this.setTheme(e.matches ? 'dark' : 'light');
    });
  }

  private getInitialTheme(): ThemeType {
    const savedTheme = localStorage.getItem('app-theme') as ThemeType;
    if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
      return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  toggleTheme() {
    this._currentTheme.update(current =>
      current === 'light' ? 'dark' : 'light'
    );
  }

  // Set theme explicitly
  setTheme(theme: ThemeType) {
    this._currentTheme.set(theme);
  }
}
