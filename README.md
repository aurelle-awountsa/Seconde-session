<htmml>
     <head> 
          <meta charset="utf-8">
         <h1> Description du projet de seconde session </h1>
     </head>
     <body>
         <h1> PRESENTATION DE L'EQUIPE </h1>
           <p> Donhoungo Awountsa Aurelle Tilly</p>
         <h1> DESCRIPTION DU PROJET </h1>
         <p>  
             Le projet consiste à la réalisation d'une base de données  pour la gestion d'un hotel de la place. Elle permettra 
             de savoir quelles chambres sont vides ou pas lesquelles sont reservées et par qui, quel employé est affecté a une tache ou pas, si la salle d’événement 
             est disponible ou occupé, d(avoir les informations nécessaires concernant les occupant d'une chambre
        </p>
        <h1>ASPECTS IMPLÉMENTES </h1>
        <p>
            <u><b> FRONTEND </b></u><br>
               Nous aurons dans ce projet des pages HTML,jS et CSS<br>
              -html<br>
                  * un formulaire qui permettra de récupérer les données du client afin de les insérés dans la base de données<br> 
                  * un formulaire qui permettra d’insérer un nouvel  employé dans la base  de données<br>
                  *un formulaire qui permettra d'insérer les chambres réservées  <br>
                  *une page web qui contiendra les photos de l'hotel et de ses chambres <br>
                  * une page web qui permettra de visualiser les résultats de différentes requêtes<br> 
              -Js<br>
                  *les fichiers js liés aux pages d'insertion des clients et des employés<br>
                  * un autre pour les différentes requêtes<br>
              - CSS des fichiers css lies au différentes pages html<br>
         </p>
         <p>
            <u><b> BACKEND </b></u><br>
              Nous aurons un serveur et  une base de données qui contiendra: <br>
                -Des tables <br>
                     * la table client qui contiendra les information relatives aux clients<br>
                         attributs:  numéro de cni (identifiant); nom; prénom; sexe; date de naissance; date d'entrée; date de 
                            reservation (pas obligatoire); sortie( oui/non)<br>
                     * la table employé qui contient les informations relatives aux employés<br>
                         attributs: numéro de cni (identifiant); nom; prénom; sexe; domaine; date de naissance<br>
                     * la table chambres qui contiendra la liste des chambres de l'hotel<br>
                         attributs: numéro de la chambre; prix, taille<br>
                     * la table reservation qui permet de savoir si la chambre est réservée ou pas<br>
                          attributs: numéro de la chambre; reservation (oui/ non); date de reservation; numéro de cni de celui 
                           qui reserve la chambre et son nom.<br>
               -Des web-services <br>
               -Des procedures<br>
         </p>     
         <h1> DETAIL DE L'API REST </h1>
     </body>
</html>
