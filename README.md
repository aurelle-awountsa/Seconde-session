
<html>
     <head> 
         <h1> Description du projet de seconde session </h1>
     </head>
     <body>
         <h1> PRESENTATION DE L'EQUIPE </h1>
           <p> Donhoungo Awountsa Aurelle Tilly</p>
         <h1> DESCRIPTION DU PROJET </h1>
         <p>  
             Le projet consiste à la réalisation d'une base de données  pour la gestion des reservations d'un hotel de la place. Elle permettra 
             de savoir quelles chambres sont vides ou pas lesquelles sont réservées et par qui, quel employé s'occupe de quelle chambre ,  d'avoir les informations nécessaires concernant les occupants d'une chambre
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
                         attributs:  numéro de cni (identifiant) clé primaire; nom; prénom; sexe; date de naissance; <br>
                     * la table reservation qui contiendra la  liste des chambres réservées qui sera liée à la table client et à la table des chambres <br>
                         attributs: resId clé primaire, idChambre clé primaire, idClient clé étrangère, dateEntrée, dateSortie<br>
                     * la table employé qui contient les informations relatives aux employés<br>
                         attributs: numéro de cni (identifiant); nom; prénom; sexe; domaine; date de naissance<br>
                     * la table chambres qui contiendra la liste des chambres de l'hotel<br>
                         attributs: idChambre clé primaire; idEmployé clé étrangère, idCatégorie clé étrangère, description<br>
                     *la table catégorie qui contiendra les catégorie des chambres <br>
                         attributs: idCatégorie clé primaire, prix<br>
               -Des web-services <br>
               -Des procedures<br>
         </p>     
         <h1> DETAIL DE L'API REST </h1>
     </body>
</html>
