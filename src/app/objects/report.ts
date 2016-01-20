/**
 * Report Class
 */
export class Report {
    //ID of the report (i.e. '1')
    id: string;
    //Date of the report (i.e. '1-1-2012')
    date: Date;
    //Quantity of products sold (i.e. '500')
    quantity: number;
    //Net sale of the products sold (i.e. '750')
    netSale: number;
    //Cost of all the goods to make the products (i.e. '400')
    costOfGoods: number;
    //Gross Profit
    grossProfit: number;
    //Is the report profitable
    isProfitable: boolean;

    constructor(id: string, date: string, quantity: string, netSale: string, costOfGoods: string) {
        const PROFITABLE = 200;

        this.id = id;
        this.date = new Date(date);
        this.quantity = Number(quantity);
        this.netSale = Number(netSale);
        this.costOfGoods = Number(costOfGoods);
        this.grossProfit = this.netSale - this.costOfGoods;
        this.isProfitable = this.grossProfit > PROFITABLE ? true : false;
    }

    //Shorthand for above code if all the data coming in was the correct type :)
    //constructor(
    //    public id: string,
    //    public date: Date,
    //    public quantity: Number,
    //    public netSale: Number,
    //    public costOfGoods: Number
    //) {}
}
