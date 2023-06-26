
CREATE TABLE images(
   id  INT  NOT NULL PRIMARY KEY AUTO_INCREMENT
  ,src VARCHAR(200) NOT NULL
  ,alt VARCHAR(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE products(
   id       INT  NOT NULL PRIMARY KEY AUTO_INCREMENT
  ,name    VARCHAR(255) NOT NULL
  ,price INT NOT NULL
  ,status   VARCHAR(255) NOT NULL
  ,description     VARCHAR(1300) NOT NULL
  ,image_id INT NOT NULL,
  CONSTRAINT image_id_fk FOREIGN KEY (image_id) REFERENCES images(id) ) ENGINE=InnoDB DEFAULT CHARSET=utf8; 

CREATE TABLE categories (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE products_to_categories (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  categories_id INT,
  products_id INT,
  CONSTRAINT categories_id_fk FOREIGN KEY (categories_id) REFERENCES categories(id),
  CONSTRAINT products_id_fk FOREIGN KEY (products_id) REFERENCES products(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

