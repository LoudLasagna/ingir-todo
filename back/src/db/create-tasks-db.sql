DROP DATABASE IF EXISTS tasks_db;
CREATE DATABASE IF NOT EXISTS tasks_db;
USE tasks_db;

DROP TABLE IF EXISTS tasks;

CREATE TABLE IF NOT EXISTS tasks
  (
     id         INT PRIMARY KEY auto_increment,
     title      VARCHAR(100) NOT NULL,
     completed  BOOLEAN NOT NULL
  );
