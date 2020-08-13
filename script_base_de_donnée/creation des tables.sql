// création de la table chambre 

create table chambre(
    idChambre char(100),
    idEmployé char(50),
    idcatégorie char(50),
	description long varchar,
    constraint pk_chambre PRIMARY KEY (idChambre),
    CONSTRAINT  fk_employé FOREIGN key (idEmployé) REFERENCE employés (idEmployé),
    CONSTRAINT  fk_catégorie foreign key (idcatégorie) reference catégorie( idcatégorie)

);
// création de la table employés

CREATE TABLE employés(
    idEmployé char(50),
    nomEployé char(255),
    prenomEmployé char(255),
    sexeEmployé char(1),
    dnEmploye date,
    gsmEmployé char(20),
    CONSTRAINT pk_employé PRIMARY KEY (idEmployé)
);

// création de la table clients 

CREATE TABLE clients(
    idClient char(20),
    nomClient char(255),
    prenomClient char(255),
    sexeClient char(1),
    age int,
    gsmClient char(20),
    CONSTRAINT pk_client PRIMARY KEY(idClient)
	
);
// création de la table reservation

CREATE TABLE reservation(
    idClient char(20),
    idChambre char(100),
    dateReservation date,
    CONSTRAINT fk_clients FOREIGN key (idClients) REFERENCE clients(idClient),
    CONSTRAINT fk_chambre FOREIGN key (idChambre) reference chambre(idChambre)
);

// création de la table catégorie

create table catégorie(
    idcatégorie char(50),
    prix int not null,
    CONSTRAINT pk_cathegorie PRIMARY KEY (cathégorie)
);

