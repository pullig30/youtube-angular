import { Component, HostListener, Input } from '@angular/core';
import { ResultsService } from '../shared/results.service'
import { Router } from '@angular/router';
import { Video, YoutubeApiService } from '../models';

@Component({
    selector: 'video-list',
    templateUrl: './video-list.component.html',
    styleUrls: ['./video-list.component.css']
})

export class VideoListComponent {
    @Input() videos: Video[];
    
    constructor(private router: Router) { }

    public SelectVideo(selectedVideo: Video)
    {
        
        this.router.navigate(['video/' + selectedVideo.id.videoId]);
    }
}