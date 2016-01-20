/// <reference path="../../../node_modules/angular2/core.d.ts" />

import { Injectable } from 'angular2/core';
import { Report } from '../objects/report';

@Injectable()
export class ReportsService {
    reports: Report[];

    constructor () {
        this.reports = [
            new Report('1', '1-1-2012', '500', '750', '400'),
            new Report('2', '2-1-2012', '425', '650', '300'),
            new Report('3', '3-1-2012', '300', '450', '300'),
            new Report('4', '4-1-2012', '600', '750', '400')
        ];
    }

    add (report: any): void {
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