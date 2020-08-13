// insertion des employés

INSERT INTO employés(idEmployé, nomEployé, prenomEmployé, sexeEmployé, dnEmploye,gsmEmployé)  values
(32025514,'Dumarchant', 'Francois','M', 1987-02-18, 0474520899);
('32025515','Bougeois', 'Chloé','F', 1997-03-23, '+32474520845');
('32025516','Piron', 'Charles','M', 1972-01-25, '+32474545899');
('32025517','Chepert', 'Dereck','M', 1979-12-17, '+32474533899');
('32025518','Grey', 'Merdite','F', 1996-08-23, '+32474524899');
('32025518','Grey', 'Merdite','F', 1996-08-23, '+32474524899');
('32025518','Grey', 'Merdite','F', 1996-08-23, '+32474524899');
('32025520','Werner', 'Alison','F', 1990-06-03, +'3247452899');

// insertion des chambres

insert into chambre(idChambre, idEmployé, idcatégorie)VALUES
('CHM01', '32025514', 'chambres simples');
insert into chambre(idChambre, idEmployé, idcatégorie)VALUES
('CHM02', '32025515', 'chambres simples');
insert into chambre(idChambre, idEmployé, idcatégorie)VALUES
('CHM03', '32025516', 'chambre double');
insert into chambre(idChambre, idEmployé, idcatégorie)VALUES
('CHM04', '32025517', 'chambre double');
insert into chambre(idChambre, idEmployé, idcatégorie)VALUES
('CHM05', '32025518', 'suite nuptiale');
insert into chambre(idChambre, idEmployé, idcatégorie)VALUES
('CHM06', '32025514', 'suite nuptiale');
insert into chambre(idChambre, idEmployé, idcatégorie)VALUES
('CHM07', '32025515', 'VIP');
insert into chambre(idChambre, idEmployé, idcatégorie)VALUES
('CHM08', '32025516', 'VIP');
insert into chambre(idChambre, idEmployé, idcatégorie)VALUES
('CHM09', '32025517', 'chambres simples');
insert into chambre(idChambre, idEmployé, idcatégorie)VALUES
('CHM10', '32025518', 'chambre double');
insert into chambre(idChambre, idEmployé, idcatégorie)VALUES
('CHM11', '32025514', 'chambres simples');
insert into chambre(idChambre, idEmployé, idcatégorie)VALUES
('CHM12', '32025515', 'chambre double');
insert into chambre(idChambre, idEmployé, idcatégorie)VALUES
('CHM13', '32025516', 'VIP');
insert into chambre(idChambre, idEmployé, idcatégorie)VALUES
('CHM14', '32025517', 'suite nuptiale');
insert into chambre(idChambre, idEmployé, idcatégorie)VALUES
('CHM15', '32025518', 'chambres simples');


//insertion dans la table catégorie

insert into cathégorie (catégorie, prix) VALUES 
('chambres simples', 130);
insert into cathégorie (catégorie, prix) VALUES 
('chambre double', 150);
insert into cathégorie (catégorie, prix) VALUES 
('VIP', 250);
insert into cathégorie (catégorie, prix) VALUES 
('suite nuptiale', 350);
