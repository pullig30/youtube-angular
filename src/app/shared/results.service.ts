import { Injectable } from '@angular/core';
import { SearchResponse } from '../models/search-response.model';
import { Video } from '../models';

@Injectable()
export class ResultsService {
    private SearchResults: SearchResponse;
    private NextPageToken: string;
    private Videos: Video[];
    private Filter: string;

    constructor() {

    }

    public get GetVideos()
    {
        return this.Videos;
    }

    SetSearchResult(searchResponse: SearchResponse)
    {
        this.SearchResults = searchResponse;
        this.Videos = searchResponse.items;
        this.NextPageToken = searchResponse.nextPageToken;
    }

    GetNextPageToken()
    {
        return this.NextPageToken;
    }

    SetNextPageToken(searchResponse: SearchResponse){
        this.NextPageToken = searchResponse.nextPageToken;
        this.Videos = this.Videos.concat(searchResponse.items);
    }

    SetFilter(term: string) {
        this.Filter = term;
    }

    GetFilter() {
        return this.Filter;
    }
}