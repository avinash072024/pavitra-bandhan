import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  matches = [
    { id: 1, name: 'Pooja Hegde', age: 25, profession: 'Architect', img: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 2, name: 'Sneha Kapoor', age: 26, profession: 'Designer', img: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  shortlisted = [
    { id: 10, name: 'Kiara Advani', location: 'Pune, India', img: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 14, name: 'Aditi Joshi', location: 'Jaipur, India', img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  visitors = [
    { id: 1, name: 'Ishani Roy', time: '2 hrs ago', online: true, img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { id: 2, name: 'Anjali Gupta', time: '5 hrs ago', online: false, img: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { id: 3, name: 'Ritu Phogat', time: 'Yesterday', online: false, img: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100' }
  ];
}
