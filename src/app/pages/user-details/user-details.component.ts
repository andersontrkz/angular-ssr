import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserSidebarComponent } from '../../components/user-sidebar/user-sidebar.component';
import { MovieSearchComponent } from '../movie-search/movie-search.component';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule, UserSidebarComponent, MovieSearchComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {  
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  data: any;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = params['id'];
      this.getUser(userId);
    });
  }

  getUser(userId: number) {
    this.httpClient.get(`https://reqres.in/api/users/${userId}`).subscribe(response => {
      this.data = response;          
    });
  }
}
