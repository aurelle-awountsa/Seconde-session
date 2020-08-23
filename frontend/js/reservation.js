"use strict";

document.addEventListener('DOMContentLoaded',InitPage)

function InitPage(){
    document.getElementById('clients').addEventListener('submit',valider);
}

function valider() {
    event.preventDefault();
    let today = new Date();
    let today_formatte_date = today.getFullYear()  + (today.getMonth() + 1) + today.getDate();
    let dateEntré = document.getElementById("iddateEnt").value;
    let dateSortie = document.getElementById("idSortie").value;
    console.log(today_formatte_date);
    let som_dateEntréYear = dateEntré[0]+dateEntré[1]+dateEntré[2]+dateEntré[3];
    console.log(som_dateEntréYear);
    let som_dateEntréMonth = dateEntré[5]+dateEntré[6];
    console.log(som_dateEntréMonth);
    let som_dateEntréDay = dateEntré[8]+dateEntré[9];
    console.log(som_dateEntréDay);
    let dateInput = Number(som_dateEntréYear) + Number(som_dateEntréMonth) + Number(som_dateEntréDay);
    console.log(dateInput);
    if( dateInput < today_formatte_date){
        alert("Veuiller corriger la date de debut svp");
    }
    else{
        if (dateSortie < dateEntré){
            alert('veuillez corriger la date de sortie svp')
        }
        else{
            envoyerInformation();
            insertReservation();
            etatDisponibilite();
        }
    }
    console.log(dateEntré);
}

    //cette fonction permet d'inserer les données du formulaire dans la tables des clients
/**
*Fonction qui envoie les données du foemulaires dans la table clients de la base de données
 *elle recupère les données (id, nom, prenom, sexe, age, numéro de gsm) du client et les envoies dans la base de données
 * 
 * @example
 * // "ID:394055022, name:awountsa, lastname: aurelle, sex:F, âge:19, gsm:+32485520688"
 * 
 * @param aucun
 */
    function envoyerInformation() {

        let form = document.getElementById('clients');
        let xhr = new XMLHttpRequest();
        xhr.open('get', "http://localhost:180/insertion?ID=" + form.Client.value + "&name=" + form.nom.value + "&lastname=" + form.prenom.value + "&âge=" + form.âge.value + "&sex=" + form.sexe.value + "&gsm=" + form.gsm.value, true);
        xhr.onload = function () {
            alert("le client a été ajouté");
        }
        xhr.send();
    }

    //cette fonction permet d'inserer les données du formulaire dans la tables des reservations
/**
 *Fonction qui envoie les données du foemulaires dans la table reservation de la base de données
 *elle recupère les données (id, chambre, dateEntré, sortie) du client et les envoies dans la base de données
 *
 * @example
 * // "ID:394055022, chambre:CHM05, dateEntré:23-08-2020, sortie:25-08-2020"
 *
 * @param aucun
 */
    function insertReservation() {

        let xhr = new XMLHttpRequest();
        xhr.open('get', 'http://localhost:180/reservation?ID=' + formulaire.Client.value + '&chambre=' + formulaire.chbm.value + '&dateEntré=' + formulaire.dateEnt.value + '&sortie=' + formulaire.sortie.value, true);
        xhr.onload = function () {
            console.log('ok');
        }

        xhr.send();
    }

    // change l'etat de la disponibilité

    function etatDisponibilite() {

        let xhr = new XMLHttpRequest();
        xhr.open('get', "http://localhost:180/http_updateDisponibilite?ID=" + formulaire.chbm.value, true);
        xhr.onload = function () {
            alert('Le statut de la chambre' + formulaire.chbm.value + 'a été changé ');

        }
        xhr.send();

    }

// creation dynamique des chambres du formulaire
function dispo(){
    let xhr=new XMLHttpRequest();
    xhr.open('get', "http://localhost:180/http_getDispo",true);
    xhr.onload=function(){
        selectDynamique(JSON.parse(xhr.responseText));
        console.log(xhr.responseText);

    }
    xhr.send();
}
function selectDynamique(data){
    for(let i in data) {
        let option = document.createElement("option");
        option.value = data[i].chambre;
        option.textContent = data[i].chambre;
        document.getElementById('chbm').appendChild(option);
    }

}

