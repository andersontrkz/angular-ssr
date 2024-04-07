import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Movie } from '../../interfaces/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.scss'
})
export class MovieFormComponent {
  @Input()
  public title: string = '';

  inputValue = new FormControl('');
  searchForm!: FormGroup;
  searchError: string = '';
  movies!: Movie[];

  @Output() moviesEmitter = new EventEmitter<Movie[]>();
  public userId!: string;
  public favoriteMovie!: string;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchTerm: ['', [Validators.required, Validators.minLength(3)]]
    });

    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
  }

  onSubmit() {
    if (this.searchForm.invalid) {
      this.searchForm.controls['searchTerm'].markAsTouched();
      return;
    }

    const searchTerm = this.searchForm.value.searchTerm;
    if (searchTerm) {
      const apiKey = '3dacd77a8ba219ced04ee470310b7151';
      const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;

      this.httpClient.get(apiUrl).subscribe((data: any) => {
        this.movies = data.results;
        this.emitMovies();
      });
    }
  }

  clearSearch() {
    this.searchForm.reset();
    this.movies = [];
  }

  saveMovie() {
    if (this.searchForm.invalid) {
      this.searchForm.controls['searchTerm'].markAsTouched();
      return;
    }

    const searchTerm = this.searchForm.value.searchTerm;

    this.httpClient.post('https://reqres.in/api/user-movie/' + this.userId, { movie: searchTerm }).subscribe(() => alert('Movie favorited!'));
  }

  emitMovies() {
    this.moviesEmitter.emit(this.movies);
  }
}