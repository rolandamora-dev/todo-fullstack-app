# React Todo App

This project is a Todo app using React, Material UI, MySQL and Express. (No ORM
used as a requirement)

## Install Dependencies

```
npm install
```

### Set Environment variables

In the root folder, create a config file:

```
.env
```

and add following variables - with your own DB configurations:

```
PORT=5000
SQL_HOST=
SQL_USER=
SQL_PASSWORD=
SQL_DB=todoapp
```

Check the assigned PORT and update "proxy" in package.json in the "frontend"
folder.

```
"proxy": "http://127.0.0.1:5000"
```

### Run Database and Table migrations

After setting the environment and DB configurations, run migrations to create
database and table:

```
npm run migrations
```

### Run in dev mode (in the root folder)

```
npm run dev
```

##### Version 1.0.0
