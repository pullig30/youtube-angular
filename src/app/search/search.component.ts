import { Component, Input, OnInit, HostListener } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {Video, YoutubeApiService} from '../models'
import { ResultsService } from '../shared/results.service'

import {
   debounceTime, distinctUntilChanged, switchMap, map
 } from 'rxjs/operators';
import { SearchResponse } from '../models/search-response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'video-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

    @Input() filter: string;
    videos$: Observable<SearchResponse>;
    private searchTerms = new Subject<string>();
    private searchTermsNextPage = new Subject<string>();

    constructor(private youtubeApiService: YoutubeApiService, private resultService: ResultsService,
      private router: Router) {
    }

    ngOnInit(): void {
      this.searchTerms.pipe(
        debounceTime(300),
  
        distinctUntilChanged(),
  
        switchMap((term: string) => this.youtubeApiService.getVideos(term)),
      ).subscribe(response => this.resultService.SetSearchResult(response));
    }
  
    clear() {
      this.filter = '';
      this.resultService.SetFilter(this.filter);
    }
  
    filterChanged(event: any) {
      event.preventDefault();
      if(this.router.url == "/videos") {
        console.log(`Filter Changed: ${this.filter}`);
        this.searchTerms.next(this.filter);
        this.resultService.SetFilter(this.filter);
      }
    }

    search(event){
      if(this.router.url != "/videos") {
        this.searchTerms.next(this.filter);
        this.router.navigate(['videos']);
      }
    }
  }