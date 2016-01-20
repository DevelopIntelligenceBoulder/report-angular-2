/// <reference path="../../../node_modules/angular2/core.d.ts" />
System.register(['angular2/core', '../objects/report'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, report_1;
    var ReportsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (report_1_1) {
                report_1 = report_1_1;
            }],
        execute: function() {
            ReportsService = (function () {
                function ReportsService() {
                    this.reports = [
                        new report_1.Report('1', '1-1-2012', '500', '750', '400'),
                        new report_1.Report('2', '2-1-2012', '425', '650', '300'),
                        new report_1.Report('3', '3-1-2012', '300', '450', '300'),
                        new report_1.Report('4', '4-1-2012', '600', '750', '400')
                    ];
                }
                ReportsService.prototype.add = function (report) {
                    //Make it a string based id
                    var id = this.reports.length + 1 + '';
                    var newReport = new report_1.Report(id, report.reportDate, report.quantity, report.netSales, report.costOfGoods);
                    this.reports.push(newReport);
                };
                ReportsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ReportsService);
                return ReportsService;
            })();
            exports_1("ReportsService", ReportsService);
        }
    }
});
//# sourceMappingURL=reports-service.js.map