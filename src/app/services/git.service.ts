import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Repository} from '../models/Repository.model';
import {HttpClient, HttpParams} from '@angular/common/http';

const API_ROOT = 'https://api.github.com/search/repositories';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http: HttpClient) {
  }

  findRepositories(query: string): Observable<Repository[]> {
    const params = new HttpParams()
      .set('q', query);
    console.log(params);
    return this.http.get<any>(API_ROOT, {params})
      .pipe(
        map(data => {
          const repositoriesList = data.items;
          return repositoriesList.map(repositoryItem => new Repository(repositoryItem));
        })
      );
  }
}
