import { Component } from '@angular/core';
import { Constants } from '../../models/constants';

@Component({
  selector: 'app-new-footer',
  imports: [],
  templateUrl: './new-footer.component.html',
  styleUrl: './new-footer.component.scss'
})
export class NewFooterComponent {
  currentYear: number = new Date().getFullYear();
  appName: string = Constants.APP_NAME;
  appName1: string = Constants.APP_NAME1;
  appName2: string = Constants.APP_NAME2;
}
