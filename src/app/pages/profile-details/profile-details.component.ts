import { Component, OnInit, signal } from '@angular/core';
import { Constants } from '../../models/constants';
import { ActivatedRoute } from '@angular/router';

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
  selector: 'app-profile-details',
  imports: [],
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.scss'
})
export class ProfileDetailsComponent implements OnInit {
  selectedProfile = signal<any>([]);
  // selectedRoom!: any;

  allProfiles: Profile[] = Constants.profiles;

  constructor(private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      this.selectedProfile.set(
        this.allProfiles.find((profile: any) => profile.id === id) ?? null
      );
    });
  }
}
