import { Component } from '@angular/core';

@Component({
  selector: 'app-premium-plans',
  imports: [],
  templateUrl: './premium-plans.component.html',
  styleUrl: './premium-plans.component.scss'
})
export class PremiumPlansComponent {
  plans = [
    {
      name: 'Silver',
      price: '2,999',
      duration: '3 Months',
      icon: 'bi-shield-check',
      color: '#adb5bd',
      featured: false,
      features: ['Send 10 Interests', 'View 5 Contact Numbers', 'Chat with Matches'],
      lockedFeatures: ['Priority Listing', 'Personal Account Manager']
    },
    {
      name: 'Gold',
      price: '5,499',
      duration: '6 Months',
      icon: 'bi-award-fill',
      color: '#ffc107',
      featured: true,
      features: ['Send Unlimited Interests', 'View 50 Contact Numbers', 'Chat with Matches', 'Priority Listing'],
      lockedFeatures: ['Personal Account Manager']
    },
    {
      name: 'Platinum',
      price: '9,999',
      duration: '12 Months',
      icon: 'bi-gem',
      color: '#0dcaf0',
      featured: false,
      features: ['Unlimited Everything', 'Profile Highlighter', 'Personal Account Manager', 'Verified Badge Plus'],
      lockedFeatures: []
    }
  ];
}
