-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

DATABASE NAME- react-shopping-list

CREATE TABLE shoppingcart(
"id" serial primary key,
"name"  varchar(80) NOT NULL,
"quantity"  decimal(20) NOT NULL,
"unit" varchar(20),
"purchased" boolean default false)
;

SELECT * FROM shoppingcart;

INSERT INTO "shoppingcart"("name","quantity","unit","purchased")
VALUES('apple','2','lbs','false');