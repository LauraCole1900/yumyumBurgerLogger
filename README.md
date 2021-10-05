# Yum Yum Burger Logger

## Table of Contents

* [Description](#description)
* [Links](#links)
* [Screenshots](#screenshots)
* [Installation Instructions](#installation-instructions)
* [Technologies Used](#technologies-used)
* [Tests](#tests)
* [Credits](#credits)
* [Contributing](#contributing)
* [Questions](#questions)
* [Badges](#badges)

## Description

This app allows the user to move a burger from the "undevoured" section on the left to the "devoured" section on the right, delete a burger, and add a new burger, all by clicking the appropriate button.

## Links

[Deployed application on Heroku](https://floating-lake-94290.herokuapp.com/)

## Screenshots

Landing page:
![Landing page:](./public/assets/img/yum-yum-landing-page.png)

Page with undevoured burgers on the left and devoured burgers on the right:
![Page with undevoured burgers on the left and devoured burgers on the right](./public/assets/img/yum-yum-undevoured-devoured.png)

Add Burger form:
![Add Burger form](./public/assets/img/yum-yum-form.png)

## Installation Instructions

If you want to run a copy of this app on your local machine, you will need to install MySQL Workbench from the MySQL website here:
```
https://dev.mysql.com/downloads/mysql/
```

You will need to configure MySQL Workbench before using it. Instructions can be found here:
```
https://dev.mysql.com/doc/workbench/en/wb-mysql-connections.html
```

Then, clone the repository:

HTTPS:
```
$ git clone https://github.com/LauraCole1900/yumyumBurgerLogger.git
```

SSH:
```
$ git clone git@github.com:LauraCole1900/yumyumBurgerLogger.git
```

Then cd into the cloned directory and download the dependencies by typing into the command line
```
$ npm install --save
```

Once the dependencies and MySQL Workbench are installed and MySQL Workbench is configured, start the application by typing into the command line
```
$ node server.js
```

Then go to the browser and enter into the address bar
```
$ localhost:3005
```

## Technologies Used

[![Node.js](https://img.shields.io/badge/built%20with-Node.js-3c873a)](https://nodejs.org/en/) [![Express.js](https://img.shields.io/badge/built%20with-Express.js-303030)](https://expressjs.com/) [![Handlebars](https://img.shields.io/badge/built%20with-Express%20Handlebars-cb3837)](https://www.npmjs.com/package/express-handlebars) [![MySQL](https://img.shields.io/badge/built%20with-MySQL-00758f)](https://www.mysql.com/)

## Tests

npm run test

## Credits

Burger image from [here](https://www.vhv.rs/viewpic/TRRRohw_hamburger-clipart-jpeg-burger-clipart-png-transparent-png/)

## Contributing

N/A

## Questions

If you have further questions, you can reach me at lauracole1900@comcast.net. For more of my work, see [my GitHub](https://github.com/LauraCole1900).

## Badges

![License badge](https://img.shields.io/badge/license-MIT-134000) [![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/LauraCole1900/yumyumBurgerLogger)