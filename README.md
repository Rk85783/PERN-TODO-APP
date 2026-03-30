# PERN TODO APP

### create .env file in backend folder and set your credentials

```
NODE_ENV=
PORT=
DATABASE_URL=
```

### create .env file in frontend folder and set your credentials

```
VITE_API_URL=
```

### Create database

```
CREATE DATABASE your_database_name;
```

### Create todo table

```
CREATE TABLE todo (
    id SERIAL PRIMARY KEY,
    description VARCHAR(100),
    completed VARCHAR(100)
);
```