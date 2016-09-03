System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FeedItem;
    return {
        setters:[],
        execute: function() {
            FeedItem = (function () {
                function FeedItem(publishDate, content) {
                    this.publishDate = publishDate;
                    this.content = content;
                }
                return FeedItem;
            }());
            exports_1("FeedItem", FeedItem);
        }
    }
});

//# sourceMappingURL=feed-item.js.map
