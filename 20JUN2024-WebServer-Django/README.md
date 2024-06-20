# ⚙️ Lab 3-4 : Web Server & Django

## Lab 3: Web Server

In this lab, we will create a web server to display reports you created in the previous lab via a browser. The instructor will provide sample code to create a web server using the HTTP Server library. The server will generate HTML using data from the Postgres Database. The client side (browser) will use JavaScript provided by the instructor to display the HTML sent by the server. 

**Example Reports:**
- `ReportListAllInvoices`
- `ReportProductsSold`
- `ReportListAllProducts`

### Your Assignment

Add the Reports classes related to Receipts to your program. Write the following additional Report classes with the SQL database and modify the web page to your style:

- `class ReportListAllReceipts`: This should print the receipt in a format very similar to the form itself, with a header and line item of the receipt. Include the customer name in the header and show the invoice date as part of invoice information in the line item.
  
- `class ReportUnpaidInvoices`: Show two tables:
  1. List of invoices with amount remaining, including fields: Invoice Number, Invoice Date, Customer Name, Invoice Amount Due, Invoice Amount Received, Invoice Amount Not Paid.
  2. Footer showing the number of Invoices not paid and the total of Invoice Amount Not Paid. The receipts object will be used to calculate Invoice Amount Received for each invoice.

**Submission**

Submit your source code including a sample run with scripts used and output created as a PDF file via upload to LEB2 under the topic “Lab 3 & Lab 4”.

---

## Lab 4: Django - Report

In this lab, we will create a Django application to display reports you created in Lab 3 via a browser. The instructor will provide steps to create a Django application and source code to create reports on a Django application.

**Example Reports:**
- `ReportListAllInvoices`
- `ReportProductsSold`
- `ReportListAllProducts`

### Your Assignment

Add the Reports related to Receipts to your application on the Django framework. Write the following additional Reports with the SQL database and modify the web page to your style:

- `def ReportListAllPaymentMethod`: Use object-relation mapping (ORM) to show a list of all payment methods in your system.

- `def ReportListAllReceipts`: This should print the receipt in a format very similar to the form itself, with a header and line item of the receipt. Include the customer name in the header and show the invoice date as part of invoice information in the line item.

- `def ReportUnpaidInvoices`: Show two tables:
  1. List of invoices with amount remaining, including fields: Invoice Number, Invoice Date, Customer Name, Invoice Amount Due, Invoice Amount Received, Invoice Amount Not Paid.
  2. Footer showing the number of Invoices not paid and the total of Invoice Amount Not Paid. The receipts object will be used to calculate Invoice Amount Received for each invoice.

**Submission**

Submit your source code including a sample run with scripts used and output created as a PDF file via upload to LEB2 under the topic “Lab 3 & Lab 4”.


## Lab 4 Additional Setup

Setup databse in setup.py
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'YourDBname',
        'USER': 'postgres',
        'PASSWORD': 'YourPassWord',
        'HOST': 'localhost',
        'PORT': '',
    }
}
```
