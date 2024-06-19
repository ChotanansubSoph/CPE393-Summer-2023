# Lab: PostgreSQL & Python

## 1. PostgreSQL Tables and Data

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

## 2. Python

### 2.1 Table: Payment Method

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
### 2.2 Table: Receipt

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
### 2.3 Table: Receipt Line Item

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