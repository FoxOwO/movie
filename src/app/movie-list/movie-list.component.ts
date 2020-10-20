import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {Observable} from 'rxjs';

import { MoviesService } from '../service/movie.service'
import { Movie } from '../model/Movie';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Observable<Movie[]>;

  onlyPrivate = true;

  displayedColumns: string[] = [ 'id', 'title', 'year', 'poster'];

  constructor(private service: MoviesService, private router: Router) {}

  ngOnInit() {
    console.log("init movie list");
    this.getMovies();
  }

  getMovies() {
    this.movies = this.service.getMovies(this.onlyPrivate);
  }

}
