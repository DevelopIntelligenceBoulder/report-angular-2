/// <reference path="../../../node_modules/angular2/core.d.ts" />
/// <reference path="../../../node_modules/angular2/http.d.ts" />
/// <reference path="../../../node_modules/rxjs/RX.d.ts" />
System.register(['rxjs/add/operator/map', 'angular2/core', 'angular2/http', '../objects/report'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, report_1;
    var ReportsService;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (report_1_1) {
                report_1 = report_1_1;
            }],
        execute: function() {
            ReportsService = (function () {
                //Placing http on the object instance
                // i.e. this.http
                function ReportsService(http) {
                    this.http = http;
                    this.reports = [];
                }
                ReportsService.prototype.init = function () {
                    var _this = this;
                    var URL = 'http://lemon-aide-api.azurewebsites.net/data/reports';
                    return this.http.get(URL)
                        .map(function (response) {
                        var data = response.json();
                        _this.reports = data.map(function (report) {
                            return new report_1.Report(report.id, report.date, report.quantity, report.netSale, report.costOfGoods);
                        });
                        console.log(data);
                    });
                };
                ReportsService.prototype.getReports = function () {
                    return this.reports;
                };
                ReportsService.prototype.add = function (report) {
                    //Make it a string based id
                    var id = this.reports.length + 1 + '';
                    var newReport = new report_1.Report(id, report.reportDate, report.quantity, report.netSales, report.costOfGoods);
                    this.reports.push(newReport);
                };
                ReportsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ReportsService);
                return ReportsService;
            })();
            exports_1("ReportsService", ReportsService);
        }
    }
});
//# sourceMappingURL=reports-service.js.map