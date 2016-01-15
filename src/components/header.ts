/**
 * Header component.
 **/
import { Component } from "angular2/core";

@Component({
    selector: 'report-header',
    template: `
        <header class="title">
            <h1>Angular Reporting <span class="sub-title">Ohh yeah it can be fun!</span>
			</h1>
            <time [attr.datetime]="(date | date:'longDate')">{{date | date:'longDate'}}</time>
        </header>
    `
})
export class ReportHeader {
    date: Date;

    constructor() {
        this.date = new Date();
    }
}