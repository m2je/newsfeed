///<reference path="../typings/browser.d.ts"/>
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from "./app.component";
import {HTTP_PROVIDERS} from "@angular/http";
import {FeedService} from "./feed/feed.service";

bootstrap(AppComponent, [HTTP_PROVIDERS, FeedService]);