CREATE database burgers_db;

USE burgers_db;
CREATE TABLE burgers (
	id INTEGER AUTO_INCREMENT NOT NULL,
	PRIMARY KEY (id),
	burger_name VARCHAR(100) NULL,
	devoured BOOLEAN DEFAULT FALSE,	
	date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)
