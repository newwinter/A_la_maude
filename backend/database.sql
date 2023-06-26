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

INSERT INTO images(src,alt) VALUES ('./public/assets/images/Calot1_F_1.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/Calot1_F_2.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/Calot1_F_3.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/Calot1_F_4.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/Calot2_F_1.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/Calot2_F_2.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/Calot2_F_3.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/Calot2_F_4.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/Calot3_F_1.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/Calot3_F_2.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/Calot3_F_3.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/Calot3_F_3.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/Calot1_M_1.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/Calot1_M_2.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/Calot1_M_3.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/Calot1_M_4.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/Calot2_M_1.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/Calot2_M_2.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/Calot2_M_3.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/Calot2_M_4.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/Calot3_M_1.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/Calot3_M_2.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/Calot3_M_3.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/Calot3_M_3.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/coton1_1.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/coton1_1.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/coton1_2.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/coton1_3.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/coton1_4.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/coton1_5.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/coton1_6.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/coton1_7.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/coton2_1.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/coton2_2.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/coton2_3.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/coton3_1.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/coton3_2.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/coton3_3.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/coton3_4.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/coton4_1.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/coton4_2.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/coton4_3.jpeg','lorem ipsum');
INSERT INTO images(src,alt) VALUES ('./public/assets/images/coton4_4.jpeg','lorem ipsum');



