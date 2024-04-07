import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserCardListComponent } from '../../components/user-card-list/user-card-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, UserCardListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) { }

  redirectToUserList() {
    this.router.navigate(['/user-list']);
  }

  redirectToMovieList() {
    this.router.navigate(['/movie-search']);
  }
}
