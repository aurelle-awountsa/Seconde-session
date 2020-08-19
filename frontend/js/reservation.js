"use strict";

document.addEventListener('DOMContentLoaded',InitPage)

function InitPage(){
    document.getElementById('clients').addEventListener('submit',valider);
}
function valider() {
    event.preventDefault();
    //let today = new Date();
   // let todayConvert = Date.parse(today);
   // console.log('today'+"  "+todayConvert);
    let d1 = Date.parse(document.getElementById("iddateEnt").value);
    let d2 = Date.parse(document.getElementById("idSortie").value) ;
    console.log('d1'+"  "+d1);
    console.log('d2'+"  "+d2);
    //if(d1 < todayConvert){
      //  alert("La date de début ne peut être inférieure à la du jour");
   // }
   // else{
        if(d2 < d1){
            alert("La date de sortie ne peut être inférieure à la date d'entrée");
        }
        else{
            envoyerInformation();
            insertReservation();
            etatDisponibilite();
        }
    //}
}
    //cette fonction permet d'inserer les données du formulaire dans la tables des clients

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

// tester la date d'entrée

/*test des dates
         function date() {
             let todayYear = new Date().getFullYear();
             let todayMonth = new Date().getMonth()+1;
             let todayDate = new Date().getDate();

             let dateEntre = document.getElementById('iddateEnt').value;
             if (Number(dateEntre[0]+dateEntre[1]+dateEntre[2]+dateEntre[3]) >= todayYear && Number( dateEntre[5]+dateEntre[6]) >= todayMonth && Number(dateEntre[8]+dateEntre[9]) >= todayDate) {

                 console.log('date correcte');
             }

         }

	*/