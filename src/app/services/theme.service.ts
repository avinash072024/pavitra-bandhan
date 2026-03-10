import { effect, Injectable, signal } from '@angular/core';
import { Constants } from '../models/constants';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeKey: string = (Constants.APP_NAME1 + '-' + Constants.APP_NAME2 + '-theme').toLowerCase();
  theme = signal<string>(localStorage.getItem(this.themeKey) || 'light');

  constructor() {
    // Effect runs whenever the signal changes
    effect(() => {
      const currentTheme = this.theme();
      document.documentElement.setAttribute('data-bs-theme', currentTheme);
      localStorage.setItem(this.themeKey, currentTheme);
    });
  }

  toggleTheme() {
    this.theme.update(t => t === 'light' ? 'dark' : 'light');
    localStorage.setItem(this.themeKey, this.theme());
  }
}
