import {Component} from '@angular/core';
import {FeedListComponent} from "./feed/feed-list.component";
import {FeedAddComponent} from "./feed/feed.add.component";

@Component({
    selector: 'my-app',
    template: `
        <div align="center">
           <feed-add></feed-add>
           <feed-list></feed-list>
        </div>
    `,
    directives:[FeedListComponent,FeedAddComponent]
})
export class AppComponent {

}