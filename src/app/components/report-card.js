System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ReportCard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ReportCard = (function () {
                function ReportCard() {
                    this.randomizeImage();
                }
                ReportCard.prototype.randomizeImage = function () {
                    var images = [
                        'fa-angellist',
                        'fa-smile-o',
                        'fa-thumbs-o-up'
                    ];
                    var random = Math.round(Math.random() * 2);
                    this.image = images[random];
                };
                ReportCard.prototype.isOdd = function () {
                    return Boolean(this.index % 2);
                };
                ReportCard = __decorate([
                    core_1.Component({
                        selector: 'report-card',
                        inputs: ['report', 'index'],
                        template: "\n        <li [ngClass]=\"{odd: isOdd()}\">\n            <header>\n                {{report.date | date:'mediumDate' | uppercase}}\n            </header>\n            <p>\n                Quantity: {{report.quantity}}<br />\n                Net Profit: ${{report.netSale | number:'2.2'}}<br />\n                Cost of Goods: ${{report.costOfGoods | number:'2.2'}}\n            </p>\n            <footer>\n                <span\n                    class=\"fa\"\n                    *ngIf=\"report.isProfitable\"\n                    [ngClass]=\"[image]\">\n                    </span>\n                ${{report.grossProfit | number:'2.2'}}\n            </footer>\n        </li>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ReportCard);
                return ReportCard;
            })();
            exports_1("ReportCard", ReportCard);
        }
    }
});
//# sourceMappingURL=report-card.js.map