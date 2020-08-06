
document.addEventListener('DOMContentLoaded',InitPage);

function InitPage(){
   document.getElementById('clients').addEventListener('submit',enregistrerClient);
}
function enregistrerClient(e){
    e.preventDefault();
        
        let form = document.getElementById("clients");
    
       form = this;
       
 soumettre(this.Client.value);        

}

function soumettre(id){

    let xhr = new XMLHttpRequest();
    xhr.open('get',"http://localhost:180/testID",true);
    xhr.onload= function traiter(){
        console.log(xhr.responseText);
		
        let reponse = JSON.parse(xhr.responseText);
        
        let chambre = document.getElementById("chm");
        
        let form = document.getElementById("clients");
        tester(reponse);
        
		envoyerInformation(form.Client.value, form.nom.value, form.prenom.value,  form.âge.value, form.sexe.value, form.gsm.value);
        insertReservation();
         
	}
	   function tester(obj){
        
             for(let i in obj){
				 let chambre = document.getElementById("chm");

				let form = document.getElementById('clients');
				if(form.Client.value == obj[i].cni){
					alert('cette personne occupe déjà une chambre dans cet Hôtel');		
				}
				
				else if(chambre.value == obj[i].numéroChambre){
					alert(' cette chambre est déjà occupée');
			
				}
			}
		}
	xhr.send();

}
function  envoyerInformation(CNI, nom, prenom, âge, sexe, gsm, chambre, dateEntrée, sortie){
    let xhr=new XMLHttpRequest();
    xhr.open('get', "http://localhost:180/insertion?ID="+CNI+"&name="+nom+"&lastname="+prenom+"&âge="+âge+"&sex="+sexe+"&gsm="+gsm,true);
    xhr.onload=function(){
        
        alert("le client a été ajouté");
        console.log(xhr.responseText);
    }
    xhr.send();
}
function insertReservation (){
    let chambre = document.getElementById("chm");
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost:180/reservation?ID=' + formulaire.Client.value+'&chambre='+ formulaire.chm.value+'&dateEntré='+ formulaire.dateEnt.value+'&sortie='+formulaire.sortie.value, true);
    xhr.onload = function (){
        console.log(formulaire.chambre);
    }
    xhr.send();
}