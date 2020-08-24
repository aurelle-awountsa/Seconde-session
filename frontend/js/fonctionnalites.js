"use strict";

// FONCTIONNALITES


document.addEventListener('DOMContentLoaded', initPage);
function initPage(){
document.getElementById('chambre').addEventListener('submit', soumettreRequete);
document.getElementById('entrer').addEventListener('submit', soumettreRequeteDate);
document.getElementById('idEmployéChambre').addEventListener('submit', soumettreFormulaire);
document.getElementById('clientTotal').addEventListener('submit', clientsTotal);
document.getElementById('idChambreOccupé').addEventListener('submit', chambreOccupé)

}
//client total

function clientsTotal(e){
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('get','http://localhost:180/clientTotal',true);
    xhr.onload = function() {
        console.log(xhr.responseText)
        envoyerResultat(JSON.parse(xhr.responseText));
    }
    function envoyerResultat(obj){
        let table = "<table>";
        let tr = "<tr><th>IdClient </th><th> NomClient </th><th>DateEntré</th><th>DateSortie</th></tr>"
        table += tr;
        for( let i of obj){
            let tr = "<tr><td>" +i.id + "</td><td>" + i.nom+ "</td><td>"+ i.dateEntrée+"</td><td>"+ i.dateSortie+"</td>"
            tr += "</tr>";
            table += tr;
        }
        table += "</table>"
        document.getElementById("affichage1").innerHTML += table;
    }
    xhr.send();
}


// entrer la chambre

function soumettreRequete(e) {
    e.preventDefault();
    let form = document.getElementById('chambre');
    envoyerInformation(form.chm.value);
}
function envoyerInformation(chm) {
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost:180/chambre?chambres='+ chm,true)
    xhr.onload =  function traiterReponse() {
        console.log(xhr.responseText);
        affichage1(JSON.parse(xhr.responseText));

    }
    xhr.send();

}
function affichage1( data ){
    let table = "<table>";
    let tr = "<tr><th> ID </th><th> Nom </th><th> Prenom </th><th> Sexe </th><th> Age </th></tr>"
    table += tr;
    for( let i of data){
        let tr = "<tr><td>" + i.cni + "</td><td>" + i.nom + "</td><td>" + i.prenom + "</td><td>" + i.sexe +"</td><td>"+ i.age + "</td>"
        tr += "</tr>";
        table += tr;
    }
    table += "</table>"
    document.getElementById("affichage2").innerHTML = table;
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
        affichage2(JSON.parse(xhr.responseText));

    }
    xhr.send();
}

function affichage2( data ) {
    var table = "<table>";
    let tr = "<tr><th> ID </th><th> Nom </th> <th> Prenom </th><th> Sexe </th></tr>"
    table += tr;
    for (let i of data) {
        let tr = "<tr><td>" + i.cni + "</td><td>" + i.nom + "</td><td>" + i.prenom + "</td><td>" + i.sexe + "</td>"
        tr += "</tr>";
        table += tr;
    }
    table += "</table>"
    document.getElementById("affichage3").innerHTML = table;

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

        affichage3(JSON.parse(xhr.responseText));

    }
    xhr.send();

}
function affichage3( data ){
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


// chambre(s) occupée(s)

function chambreOccupé(e){
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('get','http://localhost:180/http_getChambresOccupes',true);
    xhr.onload = function() {
        console.log(xhr.responseText)
        envoyerInformation(JSON.parse(xhr.responseText));
    }
    function envoyerInformation(obj){
        let table = "<table>";
        let tr = "<tr><th> </th><th> Chambre occupée </th><th>Catégorie</th></tr>"
        table += tr;
        for( let i of obj){
            let tr = "<tr><td>" +i.chm + "</td><td>" + i.catégorie+ "</td>"
            tr += "</tr>";
            table += tr;
        }
        table += "</table>"
        document.getElementById("affichage5").innerHTML = table;
    }
    xhr.send();
}
// libération des chambres

function libérationChambre(){
let xhr = new XMLHttpRequest();
xhr.open('get', 'http://localhost:180/http_getLiberationChambre', true);
xhr.onload = function (){
    alert('chambre libérée');
}
xhr.send();
}
