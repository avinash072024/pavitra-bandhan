import { Component } from '@angular/core';
import { Constants } from '../../models/constants';

@Component({
  selector: 'app-success-stories',
  imports: [],
  templateUrl: './success-stories.component.html',
  styleUrl: './success-stories.component.scss'
})
export class SuccessStoriesComponent {
  stories = Constants.successStories;
}
