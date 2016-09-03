import {Component, OnInit} from "@angular/core";
import {FeedItemComponent} from "./feed-item.component";
import {FeedItem} from "./feed-item";
import {FeedService} from "./feed.service";
import {ControlGroup} from "@angular/common";

@Component({
    selector: 'feed-list',
    template: `
        <section class="feed-list" ngcontrol="my-section">
            <feed-item *ngFor="let feedItem of feedItems " [item]="feedItem"></feed-item>
        </section>
    `,
    directives: [FeedItemComponent]

})
export class FeedListComponent implements OnInit {
    feedItems: FeedItem[];

    constructor(private _feedService: FeedService) {
        _feedService.addedFeedsAnnounced$.subscribe(
            feedItem => {
                this.handleItemChange(feedItem);
            });
    }

    ngOnInit():any {
        this.reload();
    }

    reload(){
        this._feedService.loadFeedItems().subscribe(items=> this.feedItems=items);
    }
    handleItemChange(feedItem:FeedItem){
        this.reload();
    }
}