import {Component} from '@angular/core';
import {FeedListComponent} from "./feed/feed-list.component";
import {FeedAddComponent} from "./feed/feed.add.component";

@Component({
    selector: 'my-app',
    template: `
        <div align="center">
           <feed-list></feed-list>
           <feed-add></feed-add>
        </div>
    `,
    directives: [FeedListComponent, FeedAddComponent]
})
export class AppComponent {

}