import { Component } from '@angular/core';
import { Constants } from '../../models/constants';

@Component({
  selector: 'app-success-stories',
  imports: [],
  templateUrl: './success-stories.component.html',
  styleUrl: './success-stories.component.scss'
})
export class SuccessStoriesComponent {
  // stories = [
  //   {
  //     id: '102',
  //     names: 'Aniket & Snehal',
  //     location: 'Mumbai',
  //     weddingDate: '12th Dec 2025',
  //     coupleImg: 'https://images.pexels.com/photos/2055236/pexels-photo-2055236.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     testimonial: 'I was hesitant at first, but Pavitra Bandhans filters helped me find someone who shares my love for travel and culture. It was instant magic!'
  //   },
  //   {
  //     id: '085',
  //     names: 'Rahul & Priya',
  //     location: 'Delhi',
  //     weddingDate: '15th Jan 2026',
  //     coupleImg: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     testimonial: 'The verification process gave me peace of mind. I met Rahul here, and within six months, our families were celebrating our union.'
  //   },
  //   {
  //     id: '094',
  //     names: 'Vikram & Aditi',
  //     location: 'Bangalore',
  //     weddingDate: '02-02-2026',
  //     coupleImg: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     testimonial: 'We are both busy professionals. This platform made it easy to connect with someone who understands my lifestyle and values. Highly recommended!'
  //   }
  // ];

  stories = Constants.successStories;
}
