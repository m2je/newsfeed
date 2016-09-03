System.register(["@angular/core", "rxjs/Observable", "@angular/http", 'rxjs/Rx', "./feed-item", "rxjs/Subject"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Observable_1, http_1, feed_item_1, Subject_1;
    var FeedService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (feed_item_1_1) {
                feed_item_1 = feed_item_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            FeedService = (function () {
                function FeedService(_http) {
                    this._http = _http;
                    this.addedFeedsSource = new Subject_1.Subject();
                    this.addedFeedsAnnounced$ = this.addedFeedsSource.asObservable();
                }
                FeedService.prototype.loadFeedItems = function () {
                    var _this = this;
                    var feeds$ = this._http.get('./api/feeds').map(function (response) { return _this.mapFeeds(response); })
                        .catch(function (error) {
                        console.error(error);
                        return Observable_1.Observable.throw(error.json());
                    });
                    return feeds$;
                };
                FeedService.prototype.createFeedItem = function (feedItem) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    var body = JSON.stringify(feedItem);
                    return this._http.post('./api/feeds', body, options)
                        .catch(function (error) {
                        console.error(error);
                        return Observable_1.Observable.throw(error.json());
                    });
                };
                FeedService.prototype.mapFeeds = function (response) {
                    return response.json().map(this.toFeedItem);
                };
                FeedService.prototype.toFeedItem = function (r) {
                    return new feed_item_1.FeedItem(r.publishDate, r.content);
                };
                FeedService.prototype.fireItemAdded = function (feedItem) {
                    this.addedFeedsSource.next(feedItem);
                };
                FeedService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], FeedService);
                return FeedService;
            }());
            exports_1("FeedService", FeedService);
        }
    }
});

//# sourceMappingURL=feed.service.js.map
