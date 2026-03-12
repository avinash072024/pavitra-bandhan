import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Constants } from './models/constants';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SearchComponent } from './pages/search/search.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PremiumPlansComponent } from './pages/premium-plans/premium-plans.component';
import { SuccessStoriesComponent } from './pages/success-stories/success-stories.component';
import { ProfileDetailsComponent } from './pages/profile-details/profile-details.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        title: `${Constants.APP_NAME} | Home`
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        title: `${Constants.APP_NAME} | Dashboard`
    },
    {
        path: 'about',
        component: AboutComponent,
        title: `${Constants.APP_NAME} | About Us`
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: `${Constants.APP_NAME} | Contact Us`
    },
    {
        path: 'profiles',
        component: SearchComponent,
        title: `${Constants.APP_NAME} | Search`
    },
    {
        path: 'profile-details/:id',
        component: ProfileDetailsComponent,
        title: `${Constants.APP_NAME} | Profile Details`
    },
    {
        path: 'success-stories',
        component: SuccessStoriesComponent,
        title: `${Constants.APP_NAME} | Success Stories`
    },
    {
        path: 'premium-plans',
        component: PremiumPlansComponent,
        title: `${Constants.APP_NAME} | Premium Plans`
    },
    {
        path: '**',
        component: NotFoundComponent,
        title: '404 - Page not found'
    }
];
