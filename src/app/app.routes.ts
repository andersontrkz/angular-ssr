import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MovieSearchComponent } from './pages/movie-search/movie-search.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [{
          path: '',
          component: HomeComponent
        },
        {
          path: 'user-details/:id',
          component: UserDetailsComponent
        },
        {
          path: 'user-list',
          component: UserListComponent
        },
        {
          path: 'movie-search',
          component: MovieSearchComponent
        },
      ]
    },
    {
      path: '**',
      component: LayoutComponent,
      children: [{
        path: '**',
        component: NotFoundComponent
      },
    ]
  }
];
