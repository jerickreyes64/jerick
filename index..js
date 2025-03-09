class DocumentDatabase {
  constructor() {
    this.receipts = [];
    this.bankStatements = [];
    this.taxReports = [];
  }

  addReceipt(receipt) {
    this.receipts.push(receipt);
  }

  addBankStatement(statement) {
    this.bankStatements.push(statement);
  }

  addTaxReport(report) {
    this.taxReports.push(report);
  }

  getReceipts() {
    return this.receipts;
  }

  getBankStatements() {
    return this.bankStatements;
  }

  getTaxReports() {
    return this.taxReports;
  }
}

class Receipt {
  constructor(id, date, amount, description) {
    this.id = id;
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
}

class BankStatement {
  constructor(id, date, accountNumber, balance) {
    this.id = id;
    this.date = date;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
}

class TaxReport {
  constructor(id, date, taxYear, income, deductions) {
    this.id = id;
    this.date = date;
    this.taxYear = taxYear;
    this.income = income;
    this.deductions = deductions;
  }
}

const database = new DocumentDatabase();

const receipt1 = new Receipt(1, '2022-01-01', 100, 'Purchase of goods');
const receipt2 = new Receipt(2, '2022-01-15', 200, 'Purchase of services');

const statement1 = new BankStatement(1, '2022-01-01', '123456789', 1000);
const statement2 = new BankStatement(2, '2022-01-15', '123456789', 1200);

const report1 = new TaxReport(1, '2022-01-01', 2021, 50000, 10000);
const report2 = new TaxReport(2, '2022-01-15', 2021, 60000, 12000);

database.addReceipt(receipt1);
database.addReceipt(receipt2);

database.addBankStatement(statement1);
database.addBankStatement(statement2);

database.addTaxReport(report1);
database.addTaxReport(report2);

console.log(database.getReceipts());
console.log(database.getBankStatements());
console.log(database.getTaxReports());