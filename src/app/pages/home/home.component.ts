import { Component } from '@angular/core';
import { Constants } from '../../models/constants';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  appName: string = Constants.APP_NAME;
}
