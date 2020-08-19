function  callPrix(){
    let xhr=new XMLHttpRequest();
    xhr.open('get', "http://localhost:180/http_getPrixCategorie?catId="+document.getElementById('cat').value,true);
    xhr.onload=function(){
        console.log(xhr.responseText);
        takeId(JSON.parse(xhr.responseText));
    }
    xhr.send();
}
function takeId(data){
    console.log(data);
    document.getElementById('idPrix').innerHTML += data[0].prix +  "€"
}

// disponibilité
function  callDisponibilité(){
    let xhr=new XMLHttpRequest();
    xhr.open('get', "http://localhost:180/http_getDisponibilite?chm="+document.getElementById('chm1').value,true);
    xhr.onload=function(){
        console.log(xhr.responseText);
        takeDis(JSON.parse(xhr.responseText));
    }
    xhr.send();
}
function takeDis(data){
    for(let i in data){
        if(data[0].dispo==1){
            document.getElementsById('chambre1').innerText += "libre"
        }
        else {
            document.getElementsById('chambre1').innerHTML += "occupée"
        }
    }

}



// ajouter les descriptions aux chambres
function  callDescriptionChambreSimple(){
    let xhr=new XMLHttpRequest();
    xhr.open('get', "http://localhost:180/http_getDescriptionChambre",true);
    xhr.onload=function(){
        console.log(xhr.responseText);
        takeDesc(JSON.parse(xhr.responseText));
    }
    xhr.send();
}
function takeDesc(data){

    console.log(data);
    for(let i in data){

        let numChambre = data[i].chambre
        switch (numChambre) {
            case document.getElementById('chm1').value:
                document.getElementById('description1').innerHTML += data[i].descrip
                break;
            case document.getElementById('chm2').value:
                document.getElementById('description2').innerHTML += data[i].descrip
                break;
            case document.getElementById('chm3').value:
                document.getElementById('description3').innerHTML += data[i].descrip
                break;
            case document.getElementById('chm4').value:
                document.getElementById('description4').innerHTML += data[i].descrip
                break;
            case document.getElementById('chm5').value:
                document.getElementById('description5').innerHTML += data[i].descrip
                break;

        }
    }
}








