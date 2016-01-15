/**
 * Report Class
 */
var Report = (function () {
    function Report(id, date, quantity, netSale, costOfGoods) {
        var PROFITABLE = 200;
        this.id = id;
        this.date = new Date(date);
        this.quantity = Number(quantity);
        this.netSale = Number(netSale);
        this.costOfGoods = Number(costOfGoods);
        this.grossProfit = this.netSale - this.costOfGoods;
        this.isProfitable = this.grossProfit > PROFITABLE ? true : false;
    }
    return Report;
})();
exports.Report = Report;
