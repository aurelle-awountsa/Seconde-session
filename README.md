 <h1> Description du projet de seconde session Reservation dans un hôtel</h1>
     <h2> PRESENTATION DE L'EQUIPE </h2>
           <p> Donhoungo Awountsa Aurelle Tilly</p>
         <h2> DESCRIPTION DU PROJET </h2>
         <p>  
             Le projet consiste à la réalisation d'une base de données  pour la gestion des reservations d'un hotel de la place. Elle permettra de 
                connaitre le nombre de clients dans l'hôtel,  de savoir quelles chambres sont vides ou pas lesquelles sont réservées et par qui, 
                quel employé s'occupe de quelle chambre ,  d'avoir les informations nécessaires concernant les occupants d'une chambre, connaitre les clients qui sont entrés à une date .
        </p>
        <h1>ASPECTS IMPLÉMENTES </h1>
        <p>
            <u><b> FRONTEND </b></u><br>
               Nous aurons dans ce projet des pages HTML,jS et CSS<br>
              -html<br>
                  * un formulaire qui permettra de récupérer les données du client afin de les insérés dans la base de données 
                  ces informations remplirons à la fois la tables des clients et celle des reservations<br>
                  *une page web qui contiendra les photos des chambres de l'hotel   <br>
                  * une page web qui permettra de visualiser les résultats de différentes requêtes<br> 
                  *une page d'accueil<br>
              -Js<br>
                  *les fichiers js liés à la page d'insertion des clients <br>
                  * un autre fihier lié à la page  des différentes requêtes<br>
              - CSS des fichiers css lies au différentes pages html<br>
         </p>
         <p>
            <u><b> BACKEND </b></u><br>
              Nous aurons un serveur et  une base de données qui contiendront: <br>
                -Des tables <br>
                     * la table client qui contiendra les information relatives aux clients<br>
                         attributs:  numéro de cni (identifiant) clé primaire; nom (nom du client); prénom(prénom du client); sexe(sexe du 
                        client); date de naissance (date de naissance du client); <br>
                     * la table reservation qui contiendra la  liste des chambres réservées qui sera liée à la table client et à la table des 
                              chambres <br>
                         attributs: resId clé primaire, idChambre(identifiant des chambres) clé primaire et clé secondaire, idClient (identité du client)  
                        clé étrangère, dateEntrée, dateSortie<br>
                     * la table employé qui contient les informations relatives aux employés<br>
                         attributs: numéro de cni (identifiant); nom (nom de l'employé); prénom prénom de l'employé); sexe (sexe de l'employé); 
                         gsmEmployé( numéro de gsm des employés) ; date de naissance<br>
                     * la table chambres qui contiendra la liste des chambres de l'hotel<br>
                         attributs: idChambre clé primaire; idEmployé (identifiant de l'employé qui s'occupe de la chambre)clé étrangère, idCatégorie( 
                         catégorie de la chambre) clé étrangère, description( description de la chambre)<br>
                     *la table catégorie qui contiendra les catégorie des chambres <br>
                         attributs: idCatégorie clé primaire, prix<br>
               -Des web-services <br>
               -Des procedures<br>
         </p> 
      <<h1> DETAIL DE L'API REST </h1>
             <p>
                  <h3> Liste des webServices et leur description </h3>
                    *testId lié à la procédure testId ne prend rien en paramètre qui permet 
                       de tester si une chambre est 
                       déjà occupée dans la base de données et si une personne occupe déjà 
                      une chambre <br>
                    * reservation lié à la procédure 
                      insertReservation(:ID"id du client",:chambre,:dateEntré,:sortie) qui 
                       permet de récupérer les données du formulaire vers la table des
                        reservations  <br>
                    *insertion lié à la procédure 
                     insertion(:ID,:name,:lastname,:âge,:sex,:gsm) qui récupère les données 
                     du formulaire d'enregistrement pour les insérées dans la table des 
                     clients<br>
                    * chambre lié à la procédure informations(:chambres), qui lorsqu'on met 
                      l'id d'une chambre en paramètre on reçois les informations sur le 
                       client qui l'occupe<br>
                       </p>
 
![diagramme](https://user-images.githubusercontent.com/64193958/89759287-1ce20b80-daea-11ea-80b1-12a94cf73721.png)
