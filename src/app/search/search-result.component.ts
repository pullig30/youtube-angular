import { Component, HostListener } from '@angular/core';
import { ResultsService } from '../shared/results.service';
import { YoutubeApiService, Video } from '../models';



@Component({
    selector: 'search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchResultComponent {

    constructor(private youtubeApiService: YoutubeApiService, private resultsService: ResultsService) {
    }

    public get videos() {
        if(this.resultsService.GetVideos)
            return this.resultsService.GetVideos;
    }

    ScrollDebounce = true;
    @HostListener("window:scroll", [])
    onScroll(event): void {
        if(this.ScrollDebounce) {
            if ( this.resultsService.GetNextPageToken() &&
            ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2)) {
                this.youtubeApiService.getVideosNextPage(this.resultsService.GetFilter(), this.resultsService.GetNextPageToken())
                .subscribe(response => this.resultsService.SetNextPageToken(response));

                this.ScrollDebounce = false;

                setTimeout(() => { this.ScrollDebounce = true; }, 500);
            }
        }
    } 
}


















