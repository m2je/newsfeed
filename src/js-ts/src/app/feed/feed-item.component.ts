import {Component, Input} from '@angular/core';
import {FeedItem} from "./feed-item";

@Component({
    selector: 'feed-item',
    template: `
        <article class="feed-element">
            <div class="col-1">
                <h3>{{ feedItem.content }}</h3>
                <p class="info">published at: {{ feedItem.publishDate }}</p>
            </div>
            
        </article>
    `,
    styles: [`

    
     h3{
         margin:0 0 10px;
         padding:0;
         font-size:18px;
     }
     .info{
         color:rgba(95,95,95,.51);
         font-weight:700
     }
     .feed-element{
            box-shadow:1px 1px 6px #ccc;
            padding:10px;
            margin:10px 0
    }
    `]


})
export class FeedItemComponent {
    @Input('item') feedItem: FeedItem;
}