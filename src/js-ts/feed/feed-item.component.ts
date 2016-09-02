import {Component,Input} from '@angular/core';
import {FeedItem} from "./feed-item";

@Component({
    selector: 'feed-item',
    template: `
        <article class="feed-element">
            <div class="col-1">
                <h3>{{ feedItem.content }}</h3>
                <p class="info">{{ feedItem.publishDate }}</p>
            </div>
            
        </article>
    `,
    styleUrls: ['../../src/css/feed-item.css']
    // inputs: ['weatherItem: item']
})
export class FeedItemComponent {
    @Input('item') feedItem: FeedItem;
}