import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MoviesService} from '../service/movie.service';
import {Movie} from '../model/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailResolver implements Resolve<Movie> {

  constructor(private moviesService: MoviesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie> {
    return this.moviesService.getMovie(route.params.id);
  }
}
