CREATE TABLE categories (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(255)
  ,src VARCHAR(200) NOT NULL
  ,alt VARCHAR(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE products(
   id INT  NOT NULL PRIMARY KEY AUTO_INCREMENT
  ,name    VARCHAR(255) NOT NULL
  ,gender    VARCHAR(255) NOT NULL
  ,price INT NOT NULL
  ,status   VARCHAR(255) NOT NULL
  ,description     VARCHAR(1300) NOT NULL
  ,category_id INT NOT NULL,
  CONSTRAINT category_id_fk FOREIGN KEY (category_id) REFERENCES categories(id) ) ENGINE=InnoDB DEFAULT CHARSET=utf8; 

CREATE TABLE images(
   id  INT  NOT NULL PRIMARY KEY AUTO_INCREMENT
  ,src VARCHAR(200) NOT NULL
  ,alt VARCHAR(200) NOT NULL
  ,product_id INT NOT NULL,
  CONSTRAINT product_id_fk FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO categories(name,src,alt) VALUES ('Calots femme','Calot1_F_1.jpeg','lorem ipsum');
INSERT INTO categories(name,src,alt) VALUES ('Calots homme','Calot11_M_1.jpeg','lorem ipsum');
INSERT INTO categories(name,src,alt) VALUES ('Cotons','coton1_1.jpeg','lorem ipsum');

INSERT INTO products(name,gender,price,status,description,category_id) VALUES ('Calot à fleurs bleues et roses','femme',10,'disponible','Ce produit une alternative écologique et durable pour maintenir les cheveux. Fabriqué à partir de 100% de coton, il offre un confort optimal grâce à son élastique et ses lanières qui assurent un meilleur maintien. Conçu pour remplacer les produits à usage unique, ce produit est respectueux de l''environnement et réduit les déchets. Il est lavable et réutilisable, ce qui le rend économique et pratique. Adapté à tous les types de cheveux, il est fabriqué à la main en France par mes soins avec des tissus de qualité soigneusement sélectionnés. De plus, chaque pièce a été préalablement lavée au moins une fois pour garantir sa propreté. Grâce à sa durabilité, ce produit offre une solution durable pour prendre soin de vos cheveux tout en étant respectueux de l''environnement.',1);
INSERT INTO products(name,gender,price,status,description,category_id) VALUES ('Calot kaki à fleurs noirs et blanches','femme',10,'disponible','Ce produit une alternative écologique et durable pour maintenir les cheveux. Fabriqué à partir de 100% de coton, il offre un confort optimal grâce à son élastique et ses lanières qui assurent un meilleur maintien. Conçu pour remplacer les produits à usage unique, ce produit est respectueux de l''environnement et réduit les déchets. Il est lavable et réutilisable, ce qui le rend économique et pratique. Adapté à tous les types de cheveux, il est fabriqué à la main en France par mes soins avec des tissus de qualité soigneusement sélectionnés. De plus, chaque pièce a été préalablement lavée au moins une fois pour garantir sa propreté. Grâce à sa durabilité, ce produit offre une solution durable pour prendre soin de vos cheveux tout en étant respectueux de l''environnement.',1);
INSERT INTO products(name,gender,price,status,description,category_id) VALUES ('Calot blancs avec arbres','femme',10,'disponible','Ce produit une alternative écologique et durable pour maintenir les cheveux. Fabriqué à partir de 100% de coton, il offre un confort optimal grâce à son élastique et ses lanières qui assurent un meilleur maintien. Conçu pour remplacer les produits à usage unique, ce produit est respectueux de l''environnement et réduit les déchets. Il est lavable et réutilisable, ce qui le rend économique et pratique. Adapté à tous les types de cheveux, il est fabriqué à la main en France par mes soins avec des tissus de qualité soigneusement sélectionnés. De plus, chaque pièce a été préalablement lavée au moins une fois pour garantir sa propreté. Grâce à sa durabilité, ce produit offre une solution durable pour prendre soin de vos cheveux tout en étant respectueux de l''environnement.',1);
INSERT INTO products(name,gender,price,status,description,category_id) VALUES ('Calot à motifs marins','homme',10,'disponible','Ce produit une alternative écologique et durable pour maintenir les cheveux. Fabriqué à partir de 100% de coton, il offre un confort optimal grâce à son élastique et ses lanières qui assurent un meilleur maintien. Conçu pour remplacer les produits à usage unique, ce produit est respectueux de l''environnement et réduit les déchets. Il est lavable et réutilisable, ce qui le rend économique et pratique. Adapté à tous les types de cheveux, il est fabriqué à la main en France par mes soins avec des tissus de qualité soigneusement sélectionnés. De plus, chaque pièce a été préalablement lavée au moins une fois pour garantir sa propreté. Grâce à sa durabilité, ce produit offre une solution durable pour prendre soin de vos cheveux tout en étant respectueux de l''environnement.',2);
INSERT INTO products(name,gender,price,status,description,category_id) VALUES ('Calot à petits triangles','homme',10,'disponible','Ce produit une alternative écologique et durable pour maintenir les cheveux. Fabriqué à partir de 100% de coton, il offre un confort optimal grâce à son élastique et ses lanières qui assurent un meilleur maintien. Conçu pour remplacer les produits à usage unique, ce produit est respectueux de l''environnement et réduit les déchets. Il est lavable et réutilisable, ce qui le rend économique et pratique. Adapté à tous les types de cheveux, il est fabriqué à la main en France par mes soins avec des tissus de qualité soigneusement sélectionnés. De plus, chaque pièce a été préalablement lavée au moins une fois pour garantir sa propreté. Grâce à sa durabilité, ce produit offre une solution durable pour prendre soin de vos cheveux tout en étant respectueux de l''environnement.',2);
INSERT INTO products(name,gender,price,status,description,category_id) VALUES ('Calot à motifs dinosaures','homme',10,'disponible','Ce produit une alternative écologique et durable pour maintenir les cheveux. Fabriqué à partir de 100% de coton, il offre un confort optimal grâce à son élastique et ses lanières qui assurent un meilleur maintien. Conçu pour remplacer les produits à usage unique, ce produit est respectueux de l''environnement et réduit les déchets. Il est lavable et réutilisable, ce qui le rend économique et pratique. Adapté à tous les types de cheveux, il est fabriqué à la main en France par mes soins avec des tissus de qualité soigneusement sélectionnés. De plus, chaque pièce a été préalablement lavée au moins une fois pour garantir sa propreté. Grâce à sa durabilité, ce produit offre une solution durable pour prendre soin de vos cheveux tout en étant respectueux de l''environnement.',2);
INSERT INTO products(name,gender,price,status,description,category_id) VALUES ('Cotons fleuris colorés','agenre',12,'disponible','Ces produits sont une alternative écologique et durable qui remplacera vos cotons jetables. Fabriqué à partir de 100% de coton, il offre un côté en tissus doux et un coté en tissus coton à motifs. Conçu pour remplacer les produits à usage unique, ces produits est respectueux de l''environnement et réduit les déchets. Il est lavable et réutilisable, ce qui le rend économique et pratique. Ils sont fabriqués à la main en France par mes soins avec des tissus de qualité soigneusement sélectionnés. De plus, chaque pièce a été préalablement lavée au moins une fois pour garantir sa propreté.',3);
INSERT INTO products(name,gender,price,status,description,category_id) VALUES ('Cotons à motifs bleus','agenre',12,'disponible','Ces produits sont une alternative écologique et durable qui remplacera vos cotons jetables. Fabriqué à partir de 100% de coton, il offre un côté en tissus doux et un coté en tissus coton à motifs. Conçu pour remplacer les produits à usage unique, ces produits est respectueux de l''environnement et réduit les déchets. Il est lavable et réutilisable, ce qui le rend économique et pratique. Ils sont fabriqués à la main en France par mes soins avec des tissus de qualité soigneusement sélectionnés. De plus, chaque pièce a été préalablement lavée au moins une fois pour garantir sa propreté.',3);
INSERT INTO products(name,gender,price,status,description,category_id) VALUES ('Cotons à fleurs ornementales','agenre',12,'disponible','Ces produits sont une alternative écologique et durable qui remplacera vos cotons jetables. Fabriqué à partir de 100% de coton, il offre un côté en tissus doux et un coté en tissus coton à motifs. Conçu pour remplacer les produits à usage unique, ces produits est respectueux de l''environnement et réduit les déchets. Il est lavable et réutilisable, ce qui le rend économique et pratique. Ils sont fabriqués à la main en France par mes soins avec des tissus de qualité soigneusement sélectionnés. De plus, chaque pièce a été préalablement lavée au moins une fois pour garantir sa propreté.',3);
INSERT INTO products(name,gender,price,status,description,category_id) VALUES ('Cotons beiges à motifs oiseaux','agenre',12,'disponible','Ces produits sont une alternative écologique et durable qui remplacera vos cotons jetables. Fabriqué à partir de 100% de coton, il offre un côté en tissus doux et un coté en tissus coton à motifs. Conçu pour remplacer les produits à usage unique, ces produits est respectueux de l''environnement et réduit les déchets. Il est lavable et réutilisable, ce qui le rend économique et pratique. Ils sont fabriqués à la main en France par mes soins avec des tissus de qualité soigneusement sélectionnés. De plus, chaque pièce a été préalablement lavée au moins une fois pour garantir sa propreté.',3);


INSERT INTO images(src,alt,product_id) VALUES ('Calot1_F_1.jpeg','lorem ipsum',1);
INSERT INTO images(src,alt,product_id) VALUES ('Calot1_F_2.jpeg','lorem ipsum',1);
INSERT INTO images(src,alt,product_id) VALUES ('Calot1_F_3.jpeg','lorem ipsum',1);
INSERT INTO images(src,alt,product_id) VALUES ('Calot1_F_4.jpeg','lorem ipsum',1);
INSERT INTO images(src,alt,product_id) VALUES ('Calot2_F_1.jpeg','lorem ipsum',2);
INSERT INTO images(src,alt,product_id) VALUES ('Calot2_F_2.jpeg','lorem ipsum',2);
INSERT INTO images(src,alt,product_id) VALUES ('Calot2_F_3.jpeg','lorem ipsum',2);
INSERT INTO images(src,alt,product_id) VALUES ('Calot2_F_4.jpeg','lorem ipsum',2);
INSERT INTO images(src,alt,product_id) VALUES ('Calot3_F_1.jpeg','lorem ipsum',3);
INSERT INTO images(src,alt,product_id) VALUES ('Calot3_F_2.jpeg','lorem ipsum',3);
INSERT INTO images(src,alt,product_id) VALUES ('Calot3_F_3.jpeg','lorem ipsum',3);
INSERT INTO images(src,alt,product_id) VALUES ('Calot3_F_4.jpeg','lorem ipsum',3);
INSERT INTO images(src,alt,product_id) VALUES ('Calot11_M_1.jpeg','lorem ipsum',4);
INSERT INTO images(src,alt,product_id) VALUES ('Calot11_M_2.jpeg','lorem ipsum',4);
INSERT INTO images(src,alt,product_id) VALUES ('Calot11_M_3.jpeg','lorem ipsum',4);
INSERT INTO images(src,alt,product_id) VALUES ('Calot11_M_4.jpeg','lorem ipsum',4);
INSERT INTO images(src,alt,product_id) VALUES ('Calot12_M_1.jpeg','lorem ipsum',5);
INSERT INTO images(src,alt,product_id) VALUES ('Calot12_M_2.jpeg','lorem ipsum',5);
INSERT INTO images(src,alt,product_id) VALUES ('Calot12_M_3.jpeg','lorem ipsum',5);
INSERT INTO images(src,alt,product_id) VALUES ('Calot12_M_4.jpeg','lorem ipsum',5);
INSERT INTO images(src,alt,product_id) VALUES ('Calot13_M_1.jpeg','lorem ipsum',6);
INSERT INTO images(src,alt,product_id) VALUES ('Calot13_M_2.jpeg','lorem ipsum',6);
INSERT INTO images(src,alt,product_id) VALUES ('Calot13_M_3.jpeg','lorem ipsum',6);
INSERT INTO images(src,alt,product_id) VALUES ('Calot13_M_4.jpeg','lorem ipsum',6);
INSERT INTO images(src,alt,product_id) VALUES ('coton1_1.jpeg','lorem ipsum',7);
INSERT INTO images(src,alt,product_id) VALUES ('coton1_2.jpeg','lorem ipsum',7);
INSERT INTO images(src,alt,product_id) VALUES ('coton1_3.jpeg','lorem ipsum',7);
INSERT INTO images(src,alt,product_id) VALUES ('coton1_4.jpeg','lorem ipsum',7);
INSERT INTO images(src,alt,product_id) VALUES ('coton1_5.jpeg','lorem ipsum',7);
INSERT INTO images(src,alt,product_id) VALUES ('coton1_6.jpeg','lorem ipsum',7);
INSERT INTO images(src,alt,product_id) VALUES ('coton1_7.jpeg','lorem ipsum',7);
INSERT INTO images(src,alt,product_id) VALUES ('coton2_1.jpeg','lorem ipsum',8);
INSERT INTO images(src,alt,product_id) VALUES ('coton2_2.jpeg','lorem ipsum',8);
INSERT INTO images(src,alt,product_id) VALUES ('coton2_3.jpeg','lorem ipsum',8);
INSERT INTO images(src,alt,product_id) VALUES ('coton3_1.jpeg','lorem ipsum',9);
INSERT INTO images(src,alt,product_id) VALUES ('coton3_2.jpeg','lorem ipsum',9);
INSERT INTO images(src,alt,product_id) VALUES ('coton3_3.jpeg','lorem ipsum',9);
INSERT INTO images(src,alt,product_id) VALUES ('coton3_4.jpeg','lorem ipsum',9);
INSERT INTO images(src,alt,product_id) VALUES ('coton4_1.jpeg','lorem ipsum',10);
INSERT INTO images(src,alt,product_id) VALUES ('coton4_2.jpeg','lorem ipsum',10);
INSERT INTO images(src,alt,product_id) VALUES ('coton4_3.jpeg','lorem ipsum',10);
INSERT INTO images(src,alt,product_id) VALUES ('coton4_4.jpeg','lorem ipsum',10);
INSERT INTO images(src,alt,product_id) VALUES ('coton4_5.jpeg','lorem ipsum',10);

