import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MovieListComponent} from '../movie-list/movie-list.component';
import {MovieDetailComponent} from '../movie-detail/movie-detail.component';
import {MovieDetailResolver} from '../resolver/movie-detail-resolver';

const routes: Routes = [
  {path: '', component: MovieListComponent},
  {
    path: 'movie/:id', component: MovieDetailComponent, resolve: {
      movie: MovieDetailResolver
    }
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class RouterRoutingModule {
}
