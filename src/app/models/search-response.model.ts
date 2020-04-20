import { Video } from './video.model';

export class SearchResponse{
    "kind": string;
    "etag": string;
    "nextPageToken": string;
    "regionCode": string;
    "pageInfo": {
     "totalResults": number,
     "resultsPerPage": number
    };
    items: Video[];
   }