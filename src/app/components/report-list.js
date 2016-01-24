System.register(["angular2/core", "./report-card", "./report-filter-card"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, report_card_1, report_filter_card_1;
    var ReportList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (report_card_1_1) {
                report_card_1 = report_card_1_1;
            },
            function (report_filter_card_1_1) {
                report_filter_card_1 = report_filter_card_1_1;
            }],
        execute: function() {
            ReportList = (function () {
                function ReportList() {
                    this.filteredList = [];
                }
                ReportList.prototype.reportFiltered = function () {
                    return this.filteredList;
                };
                ReportList.prototype.changeIt = function (cardsShown) {
                    this.filteredList = this.reportList.slice(0, cardsShown);
                };
                ReportList = __decorate([
                    core_1.Component({
                        selector: 'report-list',
                        directives: [report_card_1.ReportCard, report_filter_card_1.ReportFilterCard],
                        inputs: ['reportList', 'cardAmount'],
                        template: "\n        <section>\n            <report-filter-card\n                [cardAmount]=\"cardAmount\"\n                (onFilterChange)=\"changeIt($event)\"\n                ></report-filter-card>\n            <ul class=\"report-listing\">\n                <report-card\n                    *ngFor=\"#report of reportFiltered(); #i=index\"\n                    [report]=\"report\"\n                    [index]=\"i\"\n                    class=\"report\">\n                </report-card>\n            </ul>\n        </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ReportList);
                return ReportList;
            })();
            exports_1("ReportList", ReportList);
        }
    }
});
//# sourceMappingURL=report-list.js.map