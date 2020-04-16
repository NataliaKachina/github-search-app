import {Component, OnInit} from '@angular/core';
import {GitService} from './services/git.service';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {debounce, debounceTime, switchMap} from 'rxjs/operators';
import {Repository} from './models/Repository.model';

@Component({
  selector: 'app-root',
 templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  search: FormControl;

  constructor(private gitService: GitService) {
  }

  title = 'git-list';
  repositories$: Observable<Repository[]>;

  ngOnInit(): void {
    this.search = new FormControl();
    const searchInput$ = this.search.valueChanges;
    this.repositories$ = searchInput$
      .pipe(
        debounceTime(300),
        switchMap(searchInputValue => this.gitService.findRepositories(searchInputValue))
      );
  }

}
