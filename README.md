# User Report Management with Node.js-Express-MongoDB Application

This is an user summary report management Node.js application.

This Node.js UserSummaryReport code use:

+ Express.js framework
+ mongoose ORM


### Configuration

**Start MongoDB server**

```
sudo service mongod start
```

**Check MongoDB server status**

```
sudo service mongod status
```

**Go to MongoDB shell**

```
mongod
```

**Show databases**

```
show dbs
```

**Create database named "UserDB"**

```
use test
```

### How to run

	npm install
	node server.js

### Operation Supported
+ Get user by gender 


### Get all user by gender
#### Request for Female:

	`GET /api/users/reports/age-summary-group-by-nationality?gender=female HTTP/1.1
    Host: localhost:3000
`
     
#### Reponse:
    `{
        "gender": "female",
        "reportDate": [
            {
                "nationality": "INDIA",
                "0-30": 1,
                "30-50": 0,
                "50 and above": 1
            },
            {
                "nationality": "US",
                "0-30": 0,
                "30-50": 0,
                "50 and above": 2
            },
            {
                "nationality": "UK",
                "0-30": 1,
                "30-50": 0,
                "50 and above": 1
            }
        ]
    }`









#### Request for Male:

	`GET /api/users/reports/age-summary-group-by-nationality?gender=male HTTP/1.1
    Host: localhost:3000
`

#### Response:

    `{
        "gender": "male",
        "reportDate": [
            {
                "nationality": "NL",
                "0-30": 0,
                "30-50": 1,
                "50 and above": 0
            },
            {
                "nationality": "INDIA",
                "0-30": 2,
                "30-50": 0,
                "50 and above": 0
            }
        ]
    }`
