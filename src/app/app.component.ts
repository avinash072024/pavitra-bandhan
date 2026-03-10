import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from './components/footer/footer.component';
import { NewFooterComponent } from './components/new-footer/new-footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, NewFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false
    });
  }
}