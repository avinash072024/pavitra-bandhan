import { Component } from '@angular/core';
import { Constants } from '../../models/constants';
import { Testimonial } from '../../interfaces/testimonial';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  testimonials: Testimonial[] = Constants.testimonials;
}
