import { Component, inject } from '@angular/core';
import { Constants } from '../../models/constants';
import { Router } from '@angular/router';

export type Gender = 'Male' | 'Female' | 'Other';

export interface Profile {
  id: string;
  name: string;
  age: number;
  profession: string;
  location: string;
  isPremium: boolean;
  gender: Gender;
  img: string;
  bio?: string;      // Optional field for detail view
  education?: string; // Optional field for advanced filtering
  isVerified: boolean;
}

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  router = inject(Router);
  allProfiles: Profile[] = Constants.profiles;

  viewProfile(profile: any): void {
    this.router.navigate(['/profile-details', profile.id]);
  }
}
