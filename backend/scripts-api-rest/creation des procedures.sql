//créer la fonction qui permet de changer le statut de la chambre après la liberaion
CREATE FUNCTION "DBA"."getLibérationChambre"()
RETURNS INTEGER
BEGIN

  DECLARE liberation date;
  SET liberation = (
    SELECT CURRENT DATE 
    );
    Call sa_set_http_header('Access-Control-Allow-Origin', '*');
            call sa_set_http_header( 'Content-Type', 'text/html' );
  
	UPDATE  chambre ch join reservation re
    set ch.disponibilite = 1
    WHERE  re.dateFin = liberation
END;


// créer la procédure qui renvoie la description des chambres

CREATE PROCEDURE "DBA"."getDescriptionChambre"( )
 RESULT(chambre char(100), descrip LONG VARCHAR  )
BEGIN
    Call sa_set_http_header('Access-Control-Allow-Origin', '*');
    call sa_set_http_header( 'Content-Type', 'text/html' );

	SELECT ch.idChambre, ch.descriptions 
    FROM chambre ch
    ORDER BY ch.idChambre
end

// créer la procédure qui permet de renvoyer les chambres qu'un employé s'occupe
CREATE PROCEDURE "DBA"."getEmploye"( in employes char(50) )
 result(chambre char(100), catégorie char(50))
    BEGIN 
        
        Call sa_set_http_header('Access-Control-Allow-Origin', '*');
        call sa_set_http_header( 'Content-Type', 'text/html' );

        select ch.idChambre,ch.idcatégorie
            from chambre ch 
            where ch.idEmployé = employes
            order by ch.idcatégorie 
    
END

// créer une procedure qui permet de retourner les chambres occupées

CREATE PROCEDURE "DBA"."getChambresOccupés"( )
RESULT(chm char(100), catégorie char(50))
BEGIN
    Call sa_set_http_header('Access-Control-Allow-Origin', '*');
    call sa_set_http_header( 'Content-Type', 'text/html' );
	SELECT  re.idChambre, ch.idcatégorie
   SELECT  re.idChambre, ch.idcatégorie
    FROM  chambre ch
    join reservation re
    WHERE ch.disponibilite = 0

END

//crée la procedure qui permet d'afficher le prix des chambres sur la page 

create PROCEDURE "DBA"."getPrixCatégorie"(in catId char(50))
RESULT( prix int )
BEGIN
    Call sa_set_http_header('Access-Control-Allow-Origin', '*');
   call sa_set_http_header( 'Content-Type', 'text/html' );
        select prix
        from  catégorie c
        where c.idcatégorie = catId 
END

//crée la procedure qui permet d'inserer les clients dans la table clients
 
create PROCEDURE "DBA"."insertion"( in ID char(20) ,
                                   in name char(255),
                                   in lastname char(255),
                                   in âge int,  
                                   in sex char(1),
                                   in gsm char(20))
    result ( cni char(20) , nom char(255) , prémom char(255),  âge int, sexe char(1), gsm char(20), numeroChambre char(100), dateEntrée date, sortie date )
 BEGIN 

   Call sa_set_http_header('Access-Control-Allow-Origin', '*');
   call sa_set_http_header( 'Content-Type', 'text/html' );

         IF (select  count(*)    
                  from clients 
                 WHERE idClient=ID)<1 
            THEN   
                insert into clients(idClient, nomClient, prenomClient, age, sexeClient, gsmClient)
                 values(ID,name,lastname,âge,sex,gsm);
               
                 ELSE 
                     call sa_set_http_header( 'Content-Type', 'text/html' );
                     SELECT '<p>'+'ce client occupe déja une chambre '+'</p>'
            ENDIF 
 END 
 
 //crée la procedure qui permet d'inserer les clients dans la table reservation
 
create PROCEDURE "DBA"."insertReservation"( in ID char(20),
                                           in chambre char(100),
                                           in dateEntré date, 
                                           in sortie date )

BEGIN
    IF (select  count(*)    
                  from reservation 
                 WHERE idChambre=ID)<1 
            THEN 
	insert into reservation (idClient, idChambre, dateEnt, dateFin)
    values( ID, chambre, dateEntré, sortie);
 ENDIF 
END
 

//crée la procedure qui permet de renvoyer les informations sur le client qui occupe la chambre demandée

create PROCEDURE "DBA"."informations"( in chambres char(100) )
 result(cni char(20), nom char(255), prenom char(255), sexe char(1), age int)
    BEGIN 
        
        Call sa_set_http_header('Access-Control-Allow-Origin', '*');
        call sa_set_http_header( 'Content-Type', 'text/html' );

        select cl.idClient, cl.nomClient, cl.prenomClient,cl.sexeClient , cl.age
            from clients cl  
            join reservation re
            where re.idChambre = chambres
            order by nomClient;
    end
	
// crée la procedure qui retourne le total des client

create PROCEDURE "DBA"."clientTotal"()
    result(totale int )
        BEGIN 
            Call sa_set_http_header('Access-Control-Allow-Origin', '*');
            call sa_set_http_header( 'Content-Type', 'text/html' );

            select count( idClient)
            from clients
        end

 // crée la procedure qui permet de retourner les informations lorsqu'on entre une date

CREATE PROCEDURE "DBA"."dateEntré"( in dateE date )
 result(cni char(20), nom char(255), prenom char(255), sexe char(1))
    BEGIN
        Call sa_set_http_header('Access-Control-Allow-Origin', '*');
        call sa_set_http_header( 'Content-Type', 'text/html' );

        select cl.idClient, cl.nomClient, cl.prenomClient, cl.sexeClient
            from clients cl
            join reservation re
            where re.dateEnt = dateE
            order by nomClient;
    end;

// renvoie les chambres libre pour créer dynamiquement la liste des chambres vides
CREATE PROCEDURE "DBA"."getDispo"(  )
RESULT( chambre char(100))
BEGIN
    Call sa_set_http_header('Access-Control-Allow-Origin', '*');
   call sa_set_http_header( 'Content-Type', 'text/html' );
	select idChambre
    from chambre
    where disponibilite = 1
    ORDER BY idChambre
END;


// permet de modifier le statut la chambre avant son occupation
CREATE PROCEDURE "DBA"."updateDisponibilite"( ID char(100) )
 /*RESULT()*/
BEGIN
    Call sa_set_http_header('Access-Control-Allow-Origin', '*');
   call sa_set_http_header( 'Content-Type', 'text/html' );
	  UPDATE chambre
   set disponibilite = 0
   WHERE idChambre = ID ;

END;


