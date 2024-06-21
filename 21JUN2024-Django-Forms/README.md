# 🖥️ Lab5: Creating Invoice Forms with Django

## ⚙️Tools:
- 1.1 [HTTP GET & POST Method](https://www.geeksforgeeks.org/difference-between-http-get-and-post-methods/) : send data from front-end to back-end
- 1.2 [jQuery](https://www.w3schools.com/jquery/) : JavaScript library that simplifies HTML document traversal, event handling, and animation.
- 1.3 [Ajax](https://www.w3schools.com/js/js_ajax_intro.asp) : Asynchoronous Javascript and XML
- 1.4 [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) : A free, open-source framework for building responsive, mobile-first websites using HTML, CSS, and JavaScript
    -  [Grid Systems](https://getbootstrap.com/docs/4.0/layout/grid/)
    -  [Modal](https://getbootstrap.com/docs/4.0/components/modal/) (popup) 

## 📚 Provided Template and Example

In the provided template zip file, it contains a Django forms project with the invoice app as an example. You can run it to see the invoice app as an example.

Provided Project Directory: 
```
└── 21JUN2024-Django-Forms/
    └── lab5_django_forms/
        ├── invoice (⭐️ a provided example app)
        ├── receipt (👨🏻‍💻 create this app yourself)
        ├── lab5_django_forms
        ├── db.sqlite3
        └── manage.py
```
> [!NOTE]  
> You can explore an example of Ajax in the invoice app at `21JUN2024-Django-Forms/lab5_django_forms/invoice/static/js/invoice.js` to learn more.

## 📝 (not-a-homework)
- **Try to create receipt app!**
  - Navigate to the `/lab5_django-forms` directory, then use the command `django-admin startapp receipt`.
  - Add the app ‘receipt’ to `/lab5/settings.py` under INSTALLED_APPS.
  - Modify `/lab5/urls.py` to include routes for the new app.
  - Update `/lab5/receipt/models.py` to define models specific to receipts.
  - Implement logic in `/lab5/receipt/views.py` for handling receipt-related operations.
  - Develop a receipt template at `/templates/receipt/receipt.html`.
  - Design a stylesheet for `receipt.html` at `/static/css/cpe.css`.
  - Create necessary JavaScript functionalities for `receipt.html` in `/static/js/receipt.js`.

