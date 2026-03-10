import { Component, HostListener, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Constants } from '../../models/constants';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  themeService = inject(ThemeService);
  // isScrolled = false;
  isScrolled = signal(false);
  appName: string = Constants.APP_NAME;
  appName1: string = Constants.APP_NAME1;
  appName2: string = Constants.APP_NAME2;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Threshold of 50px for the transition
    this.isScrolled.set(window.scrollY > 50);
  }
}
