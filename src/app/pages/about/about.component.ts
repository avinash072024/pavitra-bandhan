import { Component } from '@angular/core';
import { Constants } from '../../models/constants';

export interface Testimonial {
  id: number;
  names: string;
  location: string;
  weddingDate: string;
  img: string;
  quote: string;
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  testimonials: Testimonial[] = Constants.testimonials;
}
