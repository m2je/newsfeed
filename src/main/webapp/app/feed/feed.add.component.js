System.register(["@angular/core", "./feed.service", "./feed-item"], function(exports_1, context_1) {
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
    var core_1, feed_service_1, feed_item_1;
    var FeedAddComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (feed_service_1_1) {
                feed_service_1 = feed_service_1_1;
            },
            function (feed_item_1_1) {
                feed_item_1 = feed_item_1_1;
            }],
        execute: function() {
            FeedAddComponent = (function () {
                function FeedAddComponent(_feedService) {
                    this._feedService = _feedService;
                    this.data = {};
                }
                FeedAddComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    var feedItem = new feed_item_1.FeedItem(form.value.publishDate, form.value.content);
                    this._feedService.createFeedItem(feedItem).toPromise().then(function (newFeedItem) { return _this.fireDataChange(newFeedItem); });
                };
                FeedAddComponent.prototype.fireDataChange = function (feedItem) {
                    this._feedService.fireItemAdded(feedItem);
                };
                FeedAddComponent = __decorate([
                    core_1.Component({
                        selector: 'feed-add',
                        template: "\n        <section class=\"feed-add\">\n            \n            <form (ngSubmit)=\"onSubmit(data)\" #data=\"ngForm\">\n                <div>\n                    <label for=\"publishDate\">Publish date:</label>\n                    <input ngControl=\"publishDate\" type=\"date\" id=\"publishDate\"  required #input>\n                    \n                </div>\n                <div>\n                    <label for=\"content\">Content:</label>\n                    <input ngControl=\"content\" type=\"text\" id=\"content\"  required #input>\n                </div>\n                <div >\n                    <button type=\"submit\">publish</button>\n                </div>\n            </form>\n        </section>\n    ",
                        styles: ["\n            label {\n                display: inline-block;\n                width: 140px;\n                text-align: right;\n                padding-right: 30px;\n                font-weight:700;\n            }\n            input[type=text] {\n                width: 30%;\n                padding: 20px 20px;\n                margin: 8px 0;\n                box-sizing: border-box;\n                border: 2px solid deepskyblue;\n                border-radius: 4px;\n            }\n            input[type=date] {\n                width: 30%;\n                padding: 8px 10px;\n                margin: 8px 0;\n                box-sizing: border-box;\n                border: 2px solid deepskyblue;\n                border-radius: 4px;\n            }\n            button{\n                font-size:14px;\n                font-family:inherit;\n                background-color:#3498db;\n                box-shadow:1px 1px 1px #95a5a6;\n                border:none;\n                padding:4px 8px;\n                cursor:pointer;\n                color:#fff\n                }\n        "
                        ]
                    }), 
                    __metadata('design:paramtypes', [feed_service_1.FeedService])
                ], FeedAddComponent);
                return FeedAddComponent;
            }());
            exports_1("FeedAddComponent", FeedAddComponent);
        }
    }
});

//# sourceMappingURL=feed.add.component.js.map
