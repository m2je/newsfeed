System.register(["@angular/core", "./feed-item.component", "./feed.service"], function(exports_1, context_1) {
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
    var core_1, feed_item_component_1, feed_service_1;
    var FeedListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (feed_item_component_1_1) {
                feed_item_component_1 = feed_item_component_1_1;
            },
            function (feed_service_1_1) {
                feed_service_1 = feed_service_1_1;
            }],
        execute: function() {
            FeedListComponent = (function () {
                function FeedListComponent(_feedService) {
                    var _this = this;
                    this._feedService = _feedService;
                    _feedService.addedFeedsAnnounced$.subscribe(function (feedItem) {
                        _this.handleItemChange(feedItem);
                    });
                }
                FeedListComponent.prototype.ngOnInit = function () {
                    this.reload();
                };
                FeedListComponent.prototype.reload = function () {
                    var _this = this;
                    this._feedService.loadFeedItems().subscribe(function (items) { return _this.feedItems = items; });
                };
                FeedListComponent.prototype.handleItemChange = function (feedItem) {
                    this.reload();
                };
                FeedListComponent = __decorate([
                    core_1.Component({
                        selector: 'feed-list',
                        template: "\n        <section class=\"feed-list\" ngcontrol=\"my-section\">\n            <feed-item *ngFor=\"let feedItem of feedItems \" [item]=\"feedItem\"></feed-item>\n        </section>\n    ",
                        directives: [feed_item_component_1.FeedItemComponent]
                    }), 
                    __metadata('design:paramtypes', [feed_service_1.FeedService])
                ], FeedListComponent);
                return FeedListComponent;
            }());
            exports_1("FeedListComponent", FeedListComponent);
        }
    }
});

//# sourceMappingURL=feed-list.component.js.map
