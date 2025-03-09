class DocumentDashboard {
  constructor() {
    this.documents = [];
  }

  addDocument(document) {
    this.documents.push(document);
  }

  removeDocument(documentId) {
    this.documents = this.documents.filter(document => document.id !== documentId);
  }

  getDocuments() {
    return this.documents;
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
  constructor(id, date, taxYear, amount) {
    this.id = id;
    this.date = date;
    this.taxYear = taxYear;
    this.amount = amount;
  }
}

const dashboard = new DocumentDashboard();

const receipt = new Receipt(1, '2022-01-01', 100, 'Receipt for purchase');
const bankStatement = new BankStatement(2, '2022-01-15', '123456789', 1000);
const taxReport = new TaxReport(3, '2022-04-15', 2021, 500);

dashboard.addDocument(receipt);
dashboard.addDocument(bankStatement);
dashboard.addDocument(taxReport);

console.log(dashboard.getDocuments());