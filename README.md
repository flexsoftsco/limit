## Limit

Limit Frappe Erpnext usage via site_config

### site_config.json
```sh
{
 "db_name": "xxxxxxxxxx",
 "db_password": "xxxxxxxxxxxx",
 "limits": {
  "emails": 1500,
  "space": 0.157,
  "expiry": "2016-07-25",
  "users": 1,
  "support_email": "help@flexsofts.com",
  "support_phone": "0112533399, 0581798403, 0583716245"
    }
}
```
The valid limits you can set are:
* users - Limit on the number of maximum users for a site
* emails - Limit on the number of emails sent per month from the site. 
            When limit is reached, emails will become muted. They will be blocked up in email queue.
* space - Limit on the maximum space the site can use (GB). In above example it is 157 MB
* expiry - Expiry date for the site (YYYY-MM-DD within quotes)
* support_email - Email id to be displayed
* support_phone - Contact no to be displayed

### Usage information
http://localhost:8000/desk#usage-info

#### License

MIT