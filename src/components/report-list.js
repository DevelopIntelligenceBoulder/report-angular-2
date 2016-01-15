var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Report List handles the report listing.
 **/
var core_1 = require("angular2/core");
var report_card_js_1 = require("./report-card.js");
var report_filter_card_js_1 = require("./report-filter-card.js");
var ReportList = (function () {
    function ReportList() {
        this.filteredList = [];
        console.log('constructor');
    }
    ReportList.prototype.reportFiltered = function () {
        return this.filteredList;
    };
    ReportList.prototype.changeIt = function (cardsShown) {
        this.filteredList = this.reportList.slice(0, cardsShown);
        console.log(this.filteredList);
    };
    ReportList.prototype.ngAfterContentInit = function () {
        // Component content has been initialized
        console.log('after');
        this.filteredList = this.reportList;
    };
    ReportList = __decorate([
        core_1.Component({
            selector: 'report-list',
            directives: [report_card_js_1.ReportCard, report_filter_card_js_1.ReportFilterCard],
            inputs: ['reportList', 'cardAmount'],
            template: "\n        <section>\n            <report-filter-card\n                [cardAmount]=\"cardAmount\"\n                (onFilterChange)=\"changeIt($event)\"\n                ></report-filter-card>\n            <ul class=\"report-listing\">\n                <report-card\n                    *ngFor=\"#report of reportFiltered(); #i=index\"\n                    [report]=\"report\"\n                    [index]=\"i\"\n                    class=\"report\">\n                </report-card>\n            </ul>\n        </section>\n    "
        })
    ], ReportList);
    return ReportList;
})();
exports.ReportList = ReportList;
