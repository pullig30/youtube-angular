import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import {Video, YoutubeApiService} from '../models'

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {
  id:string;
  video:Video;
  url:string;
  relatedVideos: Video[];
  offset: number;
  stick: boolean;

  @ViewChild('video') element: ElementRef;

  constructor(private route: ActivatedRoute,
              private youtubeApiService: YoutubeApiService) { }

  ngOnInit(): void {
    this.stick = false;
    this.route.params
      .pipe(
        map(params => params['id']),
        tap(id => (this.id = id))
      )
      .subscribe(id => this.youtubeApiService.getVideo(this.id).subscribe(video => 
        {
          this.video = video;
          this.url = `https://www.youtube.com/embed/${this.id}`
          this.youtubeApiService.getRelatedVideos(this.id).subscribe(videos => this.relatedVideos = videos.items);

          
        }));
  }

  

  @HostListener("window:scroll", [])
  onScroll(event): void {
    if(window.pageYOffset >= this.offset) {
      this.stick = true;
    }
    else if(this.stick) {
      this.stick = false;
    }
  }

  onIframeLoad() {
    let el = document.getElementById('video-iframe');
    let top = el.offsetTop;
    this.offset = Math.floor( top + ( el.offsetHeight / 2 ) );
  }


}
