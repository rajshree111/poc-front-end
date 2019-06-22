export class Currency {

    date:Date;
    fromCurrency:string;
    toCurrency: string;
    conversionRate: number;
    source:string;
  
    constructor(date:Date,fromCurrency:string, toCurrency: string, conversionRate: number, source: string) {
      this.date = date;
      this.fromCurrency = fromCurrency;
      this.toCurrency = toCurrency;
      this.conversionRate=conversionRate;
      this.source=source;
    }
  }