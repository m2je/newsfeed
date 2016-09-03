/**
 * Created by Mehdi on 9/1/2016.
 */
import {Injectable} from "@angular/core";

import {Observable} from "rxjs/Observable";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/Rx';
import {FeedItem} from "./feed-item";

import {Subject} from "rxjs/Subject";

@Injectable()
export class FeedService
{
    constructor (private _http: Http) {}
    private addedFeedsSource = new Subject<FeedItem>();

    addedFeedsAnnounced$=this.addedFeedsSource.asObservable();

    loadFeedItems(): Observable<FeedItem[]>{
    let feeds$ =this._http.get('./api/feeds').
        map(response=>this.mapFeeds(response))
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json())
            });
        return feeds$;
    }


    createFeedItem(feedItem: FeedItem): Observable<FeedItem> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body=JSON.stringify(feedItem);

        return this._http.post('./api/feeds',body,options)
               .catch(error => {
               console.error(error);
               return Observable.throw(error.json())
           });

    }

    mapFeeds(response:Response): FeedItem[]{
        return response.json().map(this.toFeedItem);
    }

     toFeedItem(r:any): FeedItem{
        return new FeedItem(r.publishDate,r.content);
    }

    fireItemAdded(feedItem:FeedItem){
        this.addedFeedsSource.next(feedItem);
    }

}