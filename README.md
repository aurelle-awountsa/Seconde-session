 <h2> Projet Seconde Session: gestion des reservations d'un hotel</h2>

<h3> PRESENTATION DE L'EQUIPE </h3>
<p> Donhoungo Awountsa Aurelle Tilly</p>
<h3> DESCRIPTION DU PROJET </h3>
<p>
    Le projet consiste à la réalisation d'une base de données  pour la gestion des reservations des chambres d'un hotel de la place. Elle permettra de:<br>
<ul>
    <li> Connaitre le nombre de clients dans l'hôtel
    <li> Savoir quelles chambres sont vides ou réservées et par qui.
    <li> Quel employé s'occupe de quelle chambre
    <li> D'avoir les informations nécessaires concernant les occupants d'une chambre
    <li> Connaitre les clients qui sont entrés à une date .
</ul><br><br>
</p>
<h3>Aspects Implémentés</h3>
<p><br>
    <u> BACKEND :</u> Une base de données permettant de mémoriser les données des reservations des chambres , un serveur fournissant les pages html, css, js et des webservices et leur procédure.
    <ul>
        <li>un webservice qu permet d'inserer les données du formulaire dans la tables des clients
        <li> un webservice qu permet d'inserer les données du formulaire dans la tables des reservations
        <li> un webservice qui permet d'afficher les prix des prix des chambres
        <li>un webservice qui permet de changer le statut de la chambre  après son occupation
        <li> un webservice qui permet de tester l'id du client  avant de l'inserer dans la base de données
        <li>un webservice qui permet d'afficher les descriptions des chambres sur la page html
        <li> un webservice qui permet qui permet de renvoyer les chambres disponibles dans le select( côté html)
        <li> un webservice qui permet qui permet d'envoyer les chambres occupées
        <li>un webservice qui permet de renvoyé les informations sur le client qui occupe une chambre
        <li>un webservice qui permet qui permet de renvoyer le nombre de client total
    </ul>
</p>
<p>
    <u> FRONTEND:</u> Nous avons des pages webs(formulaire d'insertion, page d'acceuil, page des chambres, page des fonctionnalités), js et css qui présente l'interface administrateur ,
</p>

<h3> Détail de l'api rest </h3>
<h4> Liste des webServices et leur description </h4>
<p>
    <ul>
        <li> CREATE SERVICE "testID" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHOD 'GET'AS CALL testID. qui permet de tester l'id du client s'il est déjà dans la base de donnée<br><br>
        <li> CREATE SERVICE "http_updateDisponibilite" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call updateDisponibilite(:ID); qui permet de modifier le statut de la chambre lorsqu'elle est occupée.<br><br>
        <li> CREATE SERVICE "reservation" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call insertReservation(:ID,:chambre,:dateEntré,:sortie); qui permet d'inserer une partie des données  du formulaire  dans la table des reservations.<br><br>
        <li> CREATE SERVICE "insertion" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call insertion(:ID,:name,:lastname,:âge,:sex,:gsm); qui permet d'inserer une partie des données du formulaire dans la table clients<br><br>
        <li>CREATE SERVICE "chambre" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON AS call informations(:chambres); qui prend en paramètre l'id d'une chambre et retourne les informations sur le client qui occupe une chambre<br><br>
        <li> CREATE SERVICE "http_getPrixCategorie" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call getPrixCatégorie(:catId);
            qui prend en paramètre une catégorie de chambre et retourne son prix<br><br>
        <li> CREATE SERVICE "http_getEmploye" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call getEmploye(:employes);
            qui prend en paramètre un employé et retourne les chambres dont ils s'occupent<br><br>
        <li>CREATE SERVICE "http_getDispo" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call getDispo();
            qui permet de retourner les chambres vides dans le formulaire<br><br>
        <li>CREATE SERVICE "http_getDescriptionChambre" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call getDescriptionChambre();
            qui prend en paramètre une chambre et retourne sa description<br><br>
        <li>CREATE SERVICE "http_getChambresOccupes" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call getChambresOccupés();
            qui retourne les chambres occupées<br><br>
        <li>CREATE SERVICE "enter" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dateEntré(:dateE); qui prend en paramètre une date et retourne la liste des clients qui sont entrés à cette date<br><br>
         <li>CREATE SERVICE "http_getLiberationChambre" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON AS select getLibérationChambre(); qui permet de changer le statut de la chambre après sa libération <br><br>

    </ul>
</p>
<h4> Création des tables</h4><br>
<p>
 création de la table chambre 

create table chambre(
    "idChambre" identifiant de la chambre,
    "idEmployé" identifiant de l'employé qui s'occupe de la chambre,
    "idcatégorie" catégorie de la chambre,
    "description" description de la chambre,
);
 création de la table employés

CREATE TABLE employés(
    idEmployé "identifiant de lemmployé,
    "nomEployé" nom de l'employé,
    "prenomEmployé prénom de l'employé,
    sexeEmployé" sexe de l'employé,
    "dnEmploye" date de naissance de l'employé,
    "gsmEmployé" numéro de gsm de l'employé ,
);

création de la table clients 

CREATE TABLE clients(
    "idClient" identifiant du client,
    "nomClient" nom du client,
    "prenomClient" prénom du client,
    "sexeClient" sexe du client,
    "age" âge du client,
    "gsmClient" numéro de gsm du client,
    );
création de la table reservation

CREATE TABLE reservation(
    "idClient" identifiant du client,
    "idChambre" identifiant de la chambre,
    "dateReservation" date de reservation de la chambre,
    );

création de la table catégorie

create table catégorie(
    idcatégorie catégorie des chambres,
    prix prix des chambres,
    );
</p>

![diagramme](https://user-images.githubusercontent.com/64193958/90172123-d4a14280-dda2-11ea-83aa-bef514ccffa3.png)
