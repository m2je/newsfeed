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
                    <label for="publishDate">Publish date:</label>
                    <input ngControl="publishDate" type="date" id="publishDate"  required #input>
                    
                </div>
                <div>
                    <label for="content">Content:</label>
                    <input ngControl="content" type="text" id="content"  required #input>
                </div>
                <div >
                    <button type="submit">publish</button>
                </div>
            </form>
        </section>
    `   ,
    styles:[`
            label {
                display: inline-block;
                width: 140px;
                text-align: right;
                padding-right: 30px;
                font-weight:700;
            }
            input[type=text] {
                width: 30%;
                padding: 20px 20px;
                margin: 8px 0;
                box-sizing: border-box;
                border: 2px solid deepskyblue;
                border-radius: 4px;
            }
            input[type=date] {
                width: 30%;
                padding: 8px 10px;
                margin: 8px 0;
                box-sizing: border-box;
                border: 2px solid deepskyblue;
                border-radius: 4px;
            }
            button{
                font-size:14px;
                font-family:inherit;
                background-color:#3498db;
                box-shadow:1px 1px 1px #95a5a6;
                border:none;
                padding:4px 8px;
                cursor:pointer;
                color:#fff
                }
        `
    ]


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