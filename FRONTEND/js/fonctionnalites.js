// FONCTIONNALITES


// entrer la chambre

document.addEventListener('DOMContentLoaded', initPage);
function initPage(){
document.getElementById('chambre').addEventListener('submit', soumettreRequete);
document.getElementById('entrer').addEventListener('submit', soumettreRequeteDate);
document.getElementById('idEmployéChambre').addEventListener('submit', soumettreFormulaire);
document.getElementById('clientTotal').addEventListener('submit', clientsTotal);

}
function soumettreRequete(e) {
    e.preventDefault();
    let form = document.getElementById('chambre');
    envoyerRequete(form.chm.value);
}
function envoyerRequete(chm) {
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost:180/chambre?chambres='+ chm,true)
    xhr.onload =  function traiterReponse() {
        console.log(xhr.rep);
        let rep = JSON.parse(xhr.responseText)
        affichage(rep);

    }
    xhr.send();

}
function affichage( data ){
    var table = "<table>";
    let tr = "<tr><th> ID </th><th> Nom </th><th> Prenom </th><th> Sexe </th><th> Age </th></tr>"
    table += tr;
    for( let i of data){
        let tr = "<tr><td>" + i.cni + "</td><td>" + i.nom + "</td><td>" + i.prenom + "</td><td>" + i.sexe +"</td><td>"+ i.age + "</td>"
        tr += "</tr>";
        table += tr;
    }
    table += "</table>"
    document.getElementById("affichage3").innerHTML = table;
}


//entrer la date et recevoir des informations

function soumettreRequeteDate(e) {
    e.preventDefault();
    let form = document.getElementById('entrer');
    envoyerDonnées(form.date.value);
}

function envoyerDonnées(date) {
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost:180/enter?dateE='+ date,true)
    xhr.onload =  function traiterReponse() {
        console.log(xhr.responseText);
        affichageDonnées(JSON.parse(xhr.responseText));

    }
    xhr.send();
}

function affichageDonnées( data ) {
    var table = "<table>";
    let tr = "<tr><th> ID </th><th> Nom </th> <th> Prenom </th><th> Sexe </th></tr>"
    table += tr;
    for (let i of data) {
        let tr = "<tr><td>" + i.cni + "</td><td>" + i.nom + "</td><td>" + i.prenom + "</td><td>" + i.sexe + "</td>"
        tr += "</tr>";
        table += tr;
    }
    table += "</table>"
    document.getElementById("affichage1").innerHTML = table;

}


// entrer l'identifiant de l'employé et recevoir les chambres dont il s'occupe et qui les occupes



function soumettreFormulaire(event) {

    event.preventDefault();
   let formulaire =  document.getElementById('idEmployéChambre')
    envoyerRequete(formulaire.employé.value);
}

function envoyerRequete(idEmploye) {

    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost:180/http_getEmploye?employes='+ idEmploye,true)
    xhr.onload =  function() {
        console.log(JSON.parse(xhr.responseText));

        affichage(JSON.parse(xhr.responseText));

    }
    xhr.send();

}
function affichage( data ){
    var table = "<table>";
    let tr = "<tr><th> Chambre </th><th> Catégorie </th></tr>"
    table += tr;
    for( let i of data){
        let tr = "<tr><td>" + i.chambre + "</td><td>" + i.catégorie+ "</td>"
        tr += "</tr>";
        table += tr;
    }
    table += "</table>"
    document.getElementById("affichage4").innerHTML = table;
}


//client total

function clientsTotal(e){
	e.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('get','http://localhost:180/clientTotal',true);
    xhr.onload = function() {
        console.log(xhr.responseText)
        Resultat(JSON.parse(xhr.responseText));
    }
        function Resultat(obj){
            var table = "<table>";
            let tr = "<tr><th>IdClient </th><th> NomClient </th><th>DateEntré</th><th>DateSortie</th></tr>"
            table += tr;
            for( let i in obj){
                let tr = "<tr><td>" + i.id + "</td><td>" + i.nom+ "</td><td>"+ i.dateEntrée+"</td><td>"+ i.dateSortie+"</td>"
                tr += "</tr>";
                table += tr;
            }
            table += "</table>"
            document.getElementById("affichage2").innerHTML += table;
        }
    xhr.send();
}