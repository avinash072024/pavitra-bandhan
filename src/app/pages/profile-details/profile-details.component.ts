import { Component, OnInit, signal } from '@angular/core';
import { Constants } from '../../models/constants';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../../interfaces/profile';

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
