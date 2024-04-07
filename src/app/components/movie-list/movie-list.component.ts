import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  @Input()
  public movies!: Movie[];

  getImage(imagePath: string) {
    return `https://image.tmdb.org/t/p/original${imagePath}`;
  }
}
