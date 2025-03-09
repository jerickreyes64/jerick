class DocumentCategorizer {
  constructor() {
    this.documents = [];
    this.categories = ['receipt', 'bank statement', 'tax report'];
  }

  addDocument(document) {
    this.documents.push(document);
  }

  categorizeDocuments() {
    const categorizedDocuments = {};
    this.categories.forEach(category => {
      categorizedDocuments[category] = this.documents.filter(document => document.category === category);
    });
    return categorizedDocuments;
  }

  generateInvoice(categorizedDocuments) {
    const invoice = {};
    Object.keys(categorizedDocuments).forEach(category => {
      const documents = categorizedDocuments[category];
      const totalCost = documents.reduce((acc, document) => acc + document.cost, 0);
      invoice[category] = totalCost;
    });
    return invoice;
  }
}

class Document {
  constructor(name, category, cost) {
    this.name = name;
    this.category = category;
    this.cost = cost;
  }
}

const documentCategorizer = new DocumentCategorizer();

documentCategorizer.addDocument(new Document('Document 1', 'receipt', 10));
documentCategorizer.addDocument(new Document('Document 2', 'bank statement', 20));
documentCategorizer.addDocument(new Document('Document 3', 'tax report', 30));

const categorizedDocuments = documentCategorizer.categorizeDocuments();
const invoice = documentCategorizer.generateInvoice(categorizedDocuments);

console.log(invoice);