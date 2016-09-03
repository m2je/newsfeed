System.register(['@angular/core', "./feed-item"], function(exports_1, context_1) {
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
    var core_1, feed_item_1;
    var FeedItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (feed_item_1_1) {
                feed_item_1 = feed_item_1_1;
            }],
        execute: function() {
            FeedItemComponent = (function () {
                function FeedItemComponent() {
                }
                __decorate([
                    core_1.Input('item'), 
                    __metadata('design:type', feed_item_1.FeedItem)
                ], FeedItemComponent.prototype, "feedItem", void 0);
                FeedItemComponent = __decorate([
                    core_1.Component({
                        selector: 'feed-item',
                        template: "\n        <article class=\"feed-element\">\n            <div class=\"col-1\">\n                <h3>{{ feedItem.content }}</h3>\n                <p class=\"info\">published at: {{ feedItem.publishDate }}</p>\n            </div>\n            \n        </article>\n    ",
                        styles: ["\n\n    \n     h3{\n         margin:0 0 10px;\n         padding:0;\n         font-size:18px;\n     }\n     .info{\n         color:rgba(95,95,95,.51);\n         font-weight:700\n     }\n     .feed-element{\n            box-shadow:1px 1px 6px #ccc;\n            padding:10px;\n            margin:10px 0\n    }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FeedItemComponent);
                return FeedItemComponent;
            }());
            exports_1("FeedItemComponent", FeedItemComponent);
        }
    }
});

//# sourceMappingURL=feed-item.component.js.map
