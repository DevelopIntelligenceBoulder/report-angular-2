/// <reference path="../../../node_modules/angular2/core.d.ts" />
/// <reference path="../../../node_modules/angular2/http.d.ts" />
/// <reference path="../../../node_modules/rxjs/RX.d.ts" />

//Don't need all of RxJS only the map
//import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Injectable } from 'angular2/core';
//Convenience collection of modules for http
import { Http, Response } from 'angular2/http';
import { Report } from '../objects/report';


@Injectable()
export class ReportsService {
    reports: Report[];

    //Placing http on the object instance
    // i.e. this.http
    constructor(public http:Http) {
        this.reports = [];
    }

    init() {
        const URL = 'http://lemon-aide-api.azurewebsites.net/data/reports';
        return this.http.get(URL)
            .map((response) => {
                let data = response.json();
                this.reports = data.map((report: any) => {
                    return new Report(report.id,
                        report.date,
                        report.quantity,
                        report.netSale,
                        report.costOfGoods);
                });
                console.log(data);
            });

    }

    getReports() {
        return this.reports;
    }

    add(report: any): void {
        //Make it a string based id
        const id = this.reports.length + 1 + '';
        const newReport = new Report(
            id,
            report.reportDate,
            report.quantity,
            report.netSales,
            report.costOfGoods
        );
        this.reports.push(newReport);
    }
}