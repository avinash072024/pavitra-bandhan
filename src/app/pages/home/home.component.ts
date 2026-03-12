import { Component, OnInit } from '@angular/core';
import { Constants } from '../../models/constants';
import { RouterLink } from '@angular/router';
import { SuccessStory } from '../../interfaces/success-story';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  appName: string = Constants.APP_NAME;

  successStories: SuccessStory[] = [];

  ngOnInit(): void {
    this.successStories = Constants.successStories.slice(0, 3);
  }
}
