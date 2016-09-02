/**
 * Created by Mehdi on 9/1/2016.
 */
import {Component} from "@angular/core";
import {ControlGroup} from "@angular/common";
import {FeedService} from "./feed.service";
import {FeedItem} from "./feed-item";

@Component({
    selector: 'feed-add',
    template: `
        <section class="feed-add">
            
            <form (ngSubmit)="onSubmit(data)" #data="ngForm">
                <div>
                    <label for="publishDate">Publish date</label>
                    <input ngControl="publishDate" type="date" id="publishDate"  required #input>
                    
                </div>
                <div>
                    <label for="content">content</label>
                    <input ngControl="content" type="text" id="content"  required #input>
                </div>
                <div>
                    <button type="submit">Add feed</button>
                </div>
                
            </form>
        </section>
    `


})
export class FeedAddComponent {

    data: any = {};

    constructor(private _feedService:FeedService) {
    }

    onSubmit(form: ControlGroup) {
        let feedItem = new FeedItem(form.value.publishDate, form.value.content);
        this._feedService.createFeedItem(feedItem).toPromise().then(newFeedItem=>this.fireDataChange(newFeedItem));
    }

    fireDataChange(feedItem : FeedItem){
        this._feedService.fireItemAdded(feedItem);
    }

}