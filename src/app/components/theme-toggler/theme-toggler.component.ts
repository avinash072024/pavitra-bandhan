import { NgClass } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggler',
  imports: [NgClass],
  templateUrl: './theme-toggler.component.html',
  styleUrl: './theme-toggler.component.scss'
})
export class ThemeTogglerComponent {
  themeService = inject(ThemeService);
  // isScrolled = false;
  isScrolled = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Threshold of 50px for the transition
    this.isScrolled.set(window.scrollY > 50);
  }
}
