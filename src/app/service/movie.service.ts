import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../model/Movie';
import {environment} from '../../environments/environment';
import {HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {
  }

  getMovies(onlyPublic: boolean) {
    const priv = !onlyPublic;
    return this.http.get<Movie[]>(`${environment.apiUrl}/movies`, {
      params: {
        public: priv.toString(),
      },
    });
  }

  getMovie(id: number) {
    return this.http.get<Movie>(`${environment.apiUrl}/movies/${id}`);
  }

  searchMovies(title: string, online: boolean) {
    return this.http.get<Movie[]>(`${environment.apiUrl}/movies/search`, {
      params: new HttpParams().set('title', title).set('online', online.toString()),
    });
  }

  addMovie(onlineId: number, addToPublic: boolean) {
    const addObj = {
      apiId: onlineId,
    };

    return this.http.post<Movie>(`${environment.apiUrl}/movies`, addObj, {
      params: {
        public: addToPublic.toString(),
      },
    });
  }

  deleteMovie(id: number): Observable<any> {
    console.log(id);
    return this.http.delete(`${environment.apiUrl}/movies/${id}`);
  }
}
