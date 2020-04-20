export class Video {
    "id": {
        "kind": string,
        "videoId": string
       };
    "kind": string;
    "etag": string;
    "snippet": { 
        "publishedAt": Date,
        "channelId": string,
        "title": string,
        "description": string,
        "thumbnails": {
        "default": {
            "url": string
        },
        "medium": {
            "url": string
        },
        "high": {
            "url": string
        }
        },
        "categoryId": number,
        "channelTitle": string
    };
    "statistics": {
    "viewCount": number,
    "likeCount": number,
    "dislikeCount": number,
    "favoriteCount": number,
    "commentCount": number
    }
}