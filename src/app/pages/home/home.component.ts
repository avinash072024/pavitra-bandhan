import { Component, OnInit } from '@angular/core';
import { Constants } from '../../models/constants';
import { RouterLink } from '@angular/router';

export interface SuccessStory {
  id: number;
  name: string;
  date: string;
  text: string;
  img: string;
}

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
