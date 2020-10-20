import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Movie} from '../model/Movie';
import {MoviesService} from '../service/movie.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;
  addToPublic = true;

  constructor(private service: MoviesService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    console.log("inside detail init id= ");
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("id: "+id);
    this.service.getMovie(id).subscribe(movie => (this.movie = movie));
  }


}
