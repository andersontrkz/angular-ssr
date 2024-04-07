import { Component, Input } from '@angular/core';
import { MovieFormComponent } from '../../components/movie-form/movie-form.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [MovieFormComponent, MovieListComponent],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.scss'
})
export class MovieSearchComponent {
  @Input() public title: string = 'Movie Search';

  movies!: Movie[];

  receiveFoundMovies(foundMovies: Movie[]) {
    this.movies = foundMovies;
  }
}
