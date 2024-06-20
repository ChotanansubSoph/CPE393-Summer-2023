# ⚙️ Lab1-2: PostgreSQL & Python

### 👨🏻‍💻 Setup Environment
- (1) PostgreSQL:
  - [Download PostgreSQL](https://www.postgresql.org/download/)    
  - Note: During the installation process, make sure to add all components,including:
      - ☑️ PostgreSQL Server
      - ☑️ pgAdmin4
      - ☑️ Stack Builder
      - ☑️ Command Line Tools
- (2) pgAdmin4:
    - [Download pgAdmin](https://www.pgadmin.org/download/)
    - or download via Brew (macos)
      ```shell
      brew install --cask pgadmin4
      ```
      
## Lab1:  PostgreSQL Tables and Data

Create Tables and Insert Data
- In your database, create the following tables and fields, and insert the provided data.
- Show the SQL commands for creating and inserting data into each table in your report.
- Display the table with data from PostgreSQL.



### 1.1. Table: Product_Type

| Column       | Data Type    | Constraints  |
|--------------|--------------|--------------|
| ProductType  | VARCHAR(50)  | PRIMARY KEY  |
| Description  | VARCHAR(100) |              |

### Product_Type Data

| ProductType | Description                   |
|-------------|-------------------------------|
| HDD         | Hard Disk Drive               |
| CPU         | Central Processing Unit       |

### 1.2. Table: Product

| Column      | Data Type   | Constraints  |
|-------------|-------------|--------------|
| ProductCode | VARCHAR(10) | PRIMARY KEY  |
| Name        | VARCHAR(100)|              |
| Units       | VARCHAR(10) |              |
| ProductType | VARCHAR(10) |              |

#### Product Data

| ProductCode | Name                   | Units | ProductType |
|-------------|------------------------|-------|-------------|
| HD01        | Seagate HDD 80 GB      | PCS   | HDD         |
| HD02        | IBM HDD 60 GB          | PCS   | HDD         |
| INT01       | Intel Pentium IV 3.6 GHz| PCS   | CPU         |
---
### 1.3. Table: Customer

| Column       | Data Type    | Constraints  |
|--------------|--------------|--------------|
| CustomerCode | VARCHAR(10)  | PRIMARY KEY  |
| Name         | VARCHAR(100) |              |
| Address      | VARCHAR(255) |              |
| CreditLimit  | NUMERIC(10,2)|              |
| Country      | VARCHAR(50)  |              |

#### Customer Data

| CustomerCode | Name  | Address        | CreditLimit | Country |
|--------------|-------|----------------|-------------|---------|
| CUST01       | Sam   | 123 Main St    | 5000.00     | USA     |
| CUST02       | Alex  | 456 High St    | 7000.00     | Canada  |

---
### 1.4. Table: Invoice

| Column        | Data Type    | Constraints  |
|---------------|--------------|--------------|
| InvoiceNo     | VARCHAR(10)  | PRIMARY KEY  |
| Date          | DATE         |              |
| CustomerCode  | VARCHAR(10)  |              |
| DueDate       | DATE         |              |
| Total         | NUMERIC(10,2)|              |
| VAT           | NUMERIC(10,2)|              |
| AmountDue     | NUMERIC(10,2)|              |

#### Invoice Data

| InvoiceNo | Date       | CustomerCode | DueDate | Total  | VAT    | AmountDue |
|-----------|------------|--------------|---------|--------|--------|-----------|
| IN100/22  | 2022-01-02 | CUST01       | NULL    | 8000.00| 560.00 | 8560.00   |
| IN101/22  | 2022-01-04 | CUST01       | NULL    | 2000.00| 140.00 | 2140.00   |

### 1.5. Table: Invoice Line Item

| Column       | Data Type    | Constraints  |
|--------------|--------------|--------------|
| InvoiceNo    | VARCHAR(10)  |              |
| ProductCode  | VARCHAR(10)  |              |
| Quantity     | INTEGER      |              |
| UnitPrice    | NUMERIC(10,2)|              |
| ProductTotal | NUMERIC(10,2)|              |

---
#### Invoice Line Item Data

| InvoiceNo | ProductCode | Quantity | UnitPrice | ProductTotal |
|-----------|-------------|----------|-----------|--------------|
| IN100/22  | HD01        | 2        | 3000.00   | 6000.00      |
| IN100/22  | HD02        | 1        | 2000.00   | 2000.00      |
| IN101/22  | HD02        | 1        | 2000.00   | 2000.00      |
---

## Lab 2: Python 

The Python program provided in class will be used as an example. The program will be based on the following example data for three classes (objects): Product, Customer, and Invoice.

provided template:
```
.
└── lab2-progreSQL-python/
    ├── Prodct.py (🗂️Data Class)
    ├── Customer.py (🗂️Data Class)
    ├── Invoice.py (🗂️Data Class)
    ├── API.py (🚀API function)
    ├── lab_invoice_app.py (👨🏻‍💻User Interface Program)
    ├── DBHelper.py (🍬Utility/Helper function)
    └── helper_functions.py (🍬Utility/Helper function)
```

#### 2.1 Additional Table (combined with section 1.) 


### 2.1.1 Table: Payment Method

| Column         | Data Type       | Constraints  |
|----------------|-----------------|--------------|
| PaymentMethod  | CHAR(10)        | PRIMARY KEY  |
| Description    | VARCHAR(100)    |              |

#### Payment Method Data

| PaymentMethod | Description  |
|---------------|--------------|
| CC            | Credit Card  |
| DC            | Debit Card   |
| PP            | Prompt Pay   |
---
### 2.1.2 Table: Receipt

| Column           | Data Type       | Constraints  |
|------------------|-----------------|--------------|
| ReceiptNo        | CHAR(10)        | PRIMARY KEY  |
| Date             | DATE            |              |
| CustomerCode     | CHAR(10)        |              |
| PaymentMethod    | CHAR(10)        |              |
| PaymentReference | VARCHAR(100)    |              |
| TotalReceived    | NUMERIC(18,2)   |              |
| Remarks          | VARCHAR(100)    |              |

#### Receipt Data

| ReceiptNo | Date       | CustomerCode | PaymentMethod | PaymentReference | TotalReceived | Remarks          |
|-----------|------------|--------------|---------------|------------------|---------------|------------------|
| RCT01     | 2023-06-19 | CUST01       | CC            | REF123           | 8560.00       | Payment received |
| RCT02     | 2023-06-20 | CUST02       | DC            | REF456           | 2140.00       | Payment received |

---
### 2.1.3 Table: Receipt Line Item

| Column           | Data Type       | Constraints  |
|------------------|-----------------|--------------|
| ReceiptNo        | CHAR(10)        | PRIMARY KEY  |
| ItemNo           | INTEGER         | PRIMARY KEY  |
| InvoiceNo        | CHAR(10)        |              |
| AmountPaidHere   | NUMERIC(18,2)   |              |

#### Receipt Line Item Data

| ReceiptNo | ItemNo | InvoiceNo | AmountPaidHere |
|-----------|--------|-----------|----------------|
| RCT01     | 1      | IN100/22  | 8560.00        |
| RCT02     | 1      | IN101/22  | 2140.00        |


### 2.2 Specifications and Functionality

#### 2.2.1 Product Class
Dictionary with the key of Product Code, values as another dictionary with keys: Name, Units, and Product Type.

**Example:**
```python
{
  'HD01': {'Name': 'Seagate HDD 80 GB', 'Units': 'PCS', 'Product Type': 'HDD'},
  'HD02': {'Name': 'IBM HDD 60 GB', 'Units': 'PCS', 'Product Type': 'HDD'},
  'INT01': {'Name': 'Intel Pentium IV 3.6 GHz', 'Units': 'PCS', 'Product Type': 'CPU'}
}
```

#### 2.2.2 Customer Class
Dictionary with the key of Customer Code, values as another dictionary with keys: Name, Address, Credit Limit, and Country.

### 2.2.3 Invoice Class
Dictionary with the key of Invoice No, values as another dictionary with keys: Date, Customer Code, Due Date, Total, VAT, Amount Due, and a list of line items where each item in the list is a dictionary of Product Code, Quantity, Unit Price, and Product Total.

**Example:**

```python
{
  'IN100/22': {
    'Date': '2022-01-02', 'Customer Code': 'Sam', 'Due Date': None,
    'Total': 8000.00, 'VAT': 560.00, 'Amount Due': 8560.00,
    'Items List': [
      {'Product Code': 'HD01', 'Quantity': 2, 'Unit Price': 3000.00, 'Product Total': 6000.00},
      {'Product Code': 'HD02', 'Quantity': 1, 'Unit Price': 2000.00, 'Product Total': 2000.00}
    ]
  },
  'IN101/22': {
    'Date': '2022-01-04', 'Customer Code': 'Sam', 'Due Date': None,
    'Total': 2000.00, 'VAT': 140.00, 'Amount Due': 2140.00,
    'Items List': [{'Product Code': 'HD02', 'Quantity': 1, 'Unit Price': 2000.00, 'Product Total': 2000.00}]
  }
}
```

### 2.3 CRUD Functions

#### 2.3.1 Product Class CRUD

```python
def create_product(products, code, name, units, productType):
  # ... (Your implementation)
def read_product(products, code):
  # ... (Your implementation)
def update_product(products, code, newName, newUnits, newProductType):
  # ... (Your implementation)
def delete_product(products, code):
  # ... (Your implementation)
```
#### 2.3.2 Customer Class CRUD
```python
def create_customer(customers, customerCode, customerName, address, creditLimit, country):
  # ... (Your implementation)
def read_customer(customers, customerCode):
  # ... (Your implementation)
def update_customer(customers, customerCode, newCustomerName, newAddress, newCreditLimit, newCountry):
  # ... (Your implementation)
def delete_customer(customers, customerCode):
  # ... (Your implementation)
```
#### 2.3.3 Invoice Class CRUD

```python
def create_invoice(invoices, invoiceNo, invoiceDate, customerCode, dueDate, invoiceLineTuplesList):
  # ... (Your implementation)
def read_invoice(invoices, invoiceNo):
  # ... (Your implementation)
def update_invoice(invoices, invoiceNo, newInvoiceDate, newCustomerCode, newDueDate, newInvoiceLineTuplesList):
  # ... (Your implementation)
def delete_invoice(invoices, invoiceNo):
  # ... (Your implementation)
def update_invoice_line(invoices, invoiceNo, itemNo, productCode, newQuantity, newUnitPrice):
  # ... (Your implementation)
def delete_invoice_line(invoices, invoiceNo, itemNo):
  # ... (Your implementation)
```

### 2.4 Additional Classes and Functions
#### 2.4.1 Payment Method Class
- Columns: `payment_method`, `description`
- Example data:
  `CC` : Credit Card
  `DC` : Debit Card
  `PP` : Prompt Pay
#### 2.4.2 Receipt Class
- Columns: `receipt_no`, `date`, `customer_code`, `payment_method`, `payment_reference`, `total_received`, `remarks`
- Receipt Line Item Columns: `receipt_no`, `item_no`, `invoice_no`, `amount_paid_here`
#### 2.4.3 Additional API Functions
- CRUD functions for `Payment Method` and `Receipt classes`.
- ```python
  def report_list_all_receipts(receipts, invoices, customers):
    # ... (Your implementation)
---





