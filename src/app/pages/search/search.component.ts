import { Component, inject } from '@angular/core';
import { Constants } from '../../models/constants';
import { Router } from '@angular/router';
import { Profile } from '../../interfaces/profile';

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
